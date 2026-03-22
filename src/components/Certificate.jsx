import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const CONFIG = {
  RAZORPAY_KEY: "rzp_test_STNUE7a1UTbzRw",
  FORMSPREE_URL: "https://formspree.io/f/mdawjoag",
  SHEETS_URL:
    "https://script.google.com/macros/s/AKfycbxIx2CgPndtBmWojBnyfKzympEhw2iPmenwhNyZa6fLhMryUAHXhFWBzQ8n0aBmRpZM/exec",
};

export default function Certificate() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const formRef = useRef(null);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2)
      e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email.";
    if (form.phone.replace(/\D/g, "").length < 10)
      e.phone = "Invalid phone.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const postPayment = (paymentId) => {
    const enrolledOn = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    fetch(CONFIG.FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Name: form.name,
        Email: form.email,
        Phone: form.phone,
        Payment_ID: paymentId,
        Amount: "Rs.6999",
        Programme: "Psychology Certification Programme",
        Enrolled_On: enrolledOn,
      }),
    });

    fetch(CONFIG.SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        payment_id: paymentId,
      }),
    });
  };

  const handlePayment = () => {
    if (!validate()) return;

    setLoading(true);

    const rzp = new window.Razorpay({
      key: CONFIG.RAZORPAY_KEY,
      amount: 699900,
      currency: "INR",
      name: "Mate & Mentors",
      description: "Psychology Certification Programme",
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      handler: (res) => {
        postPayment(res.razorpay_payment_id);
        setSuccess(res.razorpay_payment_id);
        setLoading(false);
      },
    });

    rzp.on("payment.failed", () => {
      alert("Payment failed");
      setLoading(false);
    });

    rzp.open();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAV */}
      <nav className="bg-purple-600 text-white px-4 py-4 flex justify-between items-center">
        <div>
          <div className="text-xl font-bold">Mate & Mentors</div>
          <div className="text-purple-200 text-sm">Psychology Certification Programme</div>
        </div>
        <Link to="/" className="text-white hover:text-purple-200 transition">
          Home
        </Link>
      </nav>

      {/* HERO */}
      <section className=" bg-purple-600 min-h-[60vh] flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Seeing <em>Real Therapy Clients</em>
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Even if you have zero practical experience.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-white text-purple-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-50 transition shadow-lg"
          >
            Reserve Your Seat →
          </button>
        </div>
      </section>

      {/* FORM */}
      <div ref={formRef} className="py-16 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          {!success ? (
            <>
              <h2 className="text-2xl font-bold text-center text-purple-900 mb-6">
                Enroll Now - ₹6999
              </h2>
              
              <div className="mb-4">
                <input
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <input
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <input
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <button 
                onClick={handlePayment} 
                disabled={loading}
                className={`w-full py-3 rounded-lg text-white font-semibold text-lg ${loading ? 'bg-gray-400' : 'bg-purple-900 hover:bg-purple-800'} transition`}
              >
                {loading ? "Processing..." : "Pay ₹6999"}
              </button>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">You're Enrolled!</h2>
              <p className="text-gray-600 mb-2">Payment ID: {success}</p>
              <p className="text-gray-600">We will contact you shortly with further details.</p>
            </div>
          )}
        </div>
      </div>

      {/* Features */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">What You'll Learn</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Foundation</h3>
              <p className="text-gray-600">Build a strong foundation in psychology principles</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Practical Skills</h3>
              <p className="text-gray-600">Learn real therapy techniques and client handling</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Certification</h3>
              <p className="text-gray-600">Get certified to start your practice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8 px-4">
        <div className="text-center">
          <p className="text-purple-200">© 2025 Mate and Mentors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
