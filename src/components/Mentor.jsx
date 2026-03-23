import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaWhatsapp, FaVideo, FaPhone, FaFilter, FaTimes } from "react-icons/fa";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import CallHandler from "../components/CallHandler";
import { apiGet } from "../utils/api";

// Transform API data
const transformMateData = (matesData) => {
  if (!Array.isArray(matesData)) return [];

  return matesData.map((user) => {
    const mate = user.mate || {};

    return {
      _id: user._id,
      name: mate.name || user.name || "Unknown",
      img:
        user.image ||
        ``,
      online: user.isOnline || false,
      skills: mate.specifications?.join(", ") || "General",
      experience: "2",
      price: mate.pricePerMin || 0,
      priceDisplay: `₹${mate.pricePerMin || 0}/min`,
      category: mate.specifications?.[0] || "general",
      language: mate.languages?.join(", ") || "English",
      mobile: mate.mobile || user.mobile,
      email: mate.email || user.email,
    };
  });
};

const categories = ["All", "Relationship", "Emotional", "Career", "Life"];
const onlineStatuses = ["All", "Online now", "Offline"];

export default function Mentor() {
  const { token, getAuthToken } = useAuth();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedOnlineStatus, setSelectedOnlineStatus] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [mates, setMates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMates = async () => {
      try {
        const data = await apiGet("/users/getAll?page=1&limit=100&role=mate");

        console.log("API:", data);

        if (data.success && Array.isArray(data?.data?.data)) {
          // ✅ FIX: correct array set
          setMates(data.data.data);
        } else {
          setMates([]);
          setError("Failed to fetch mates");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchMates();
  }, []);

  // ✅ Transform
  const mentorsList = transformMateData(mates);

  // ✅ Filters fix
  const filteredMentors = mentorsList.filter((mentor) => {
    const matchesCategory =
      selectedCategory === "All" ||
      mentor.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesOnlineStatus =
      selectedOnlineStatus === "All" ||
      (selectedOnlineStatus === "Online now" && mentor.online) ||
      (selectedOnlineStatus === "Offline" && !mentor.online);

    const matchesPrice =
      mentor.price >= priceRange[0] && mentor.price <= priceRange[1];

    return matchesCategory && matchesOnlineStatus && matchesPrice;
  });

  return (
    <Layout activePage="Mate">
      {/* Filters */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 bg-white border px-6 py-4 rounded-2xl"
          >
            <FaFilter />
            Filters
          </button>

          {showFilters && (
            <div className="mt-4 bg-white p-4 rounded-xl">
              <button onClick={() => setShowFilters(false)}>
                <FaTimes />
              </button>

              <div className="mt-4">
                <label>
                  Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : error ? (
            <div className="text-center py-10">{error}</div>
          ) : filteredMentors.length === 0 ? (
            <div className="text-center py-10">No mates found</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMentors.map((mentor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <img src={mentor.img} className="w-full h-48 object-contain bg-gray-100"/>

                  <div className="p-4">
                    <div className="flex justify-between items-center w-full">
                      <h3 className="font-bold text-lg capitalize">
                        {mentor.name}
                      </h3>
                      <p className="text-purple-600 font-bold">
                        {mentor.priceDisplay}
                      </p>
                    </div>
                    <h3 className="text-purple-600  text-lg capitalize">
                      {mentor.language}
                    </h3>

                    <div>
                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 justify-center mt-4">
                        <CallHandler mentor={mentor}>
                          <button
                            className="
                          w-full flex items-center justify-center gap-2
                          bg-purple-500 rounded-lg
                          text-white font-semibold py-2.5 px-4
                        "
                          >
                            <FaVideo className="text-lg" />
                            <span>Video</span>
                          </button>
                        </CallHandler>

                        <CallHandler mentor={mentor}>
                          <button
                            className="
                          w-full flex items-center justify-center gap-2
                          bg-purple-500 rounded-lg
                          text-white font-semibold py-2.5 px-4
                        "
                          >
                            <FaPhone className="text-lg  " />
                            <span>Audio</span>
                          </button>
                        </CallHandler>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
