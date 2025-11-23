import { Link } from "react-router-dom";
import Footer from "./Footer";

function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Solar Panels",
      description:
        "High-efficiency monocrystalline panels with 22% efficiency rate",
      price: "₹45,000",
      image: "☀️",
      features: [
        "22% Efficiency",
        "25 Year Warranty",
        "Weather Resistant",
        "Easy Installation",
      ],
    },
    {
      id: 2,
      name: "Solar Inverter 5KW",
      description:
        "Advanced MPPT technology with smart monitoring capabilities",
      price: "₹85,000",
      image: "⚡",
      features: [
        "5KW Capacity",
        "MPPT Technology",
        "Smart Monitoring",
        "WiFi Connectivity",
      ],
    },
    {
      id: 3,
      name: "Solar Battery 10KWh",
      description: "Lithium-ion battery storage for reliable backup power",
      price: "₹1,20,000",
      image: "🔋",
      features: [
        "10KWh Capacity",
        "Lithium-ion",
        "10 Year Warranty",
        "Fast Charging",
      ],
    },
    {
      id: 4,
      name: "Solar Mounting Kit",
      description: "Professional mounting system for rooftop installation",
      price: "₹25,000",
      image: "🏗️",
      features: [
        "Rooftop Mount",
        "Wind Resistant",
        "Quick Assembly",
        "Universal Fit",
      ],
    },
    {
      id: 5,
      name: "Solar Charge Controller",
      description: "MPPT charge controller for optimal battery charging",
      price: "₹15,000",
      image: "🎛️",
      features: [
        "MPPT Technology",
        "LCD Display",
        "Overload Protection",
        "Temperature Compensation",
      ],
    },
    {
      id: 6,
      name: "Solar Cables & Connectors",
      description: "High-quality MC4 connectors and solar cables",
      price: "₹8,000",
      image: "🔌",
      features: [
        "MC4 Compatible",
        "Weatherproof",
        "High Current",
        "Flexible Design",
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-2xl">☀️</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">SolarGrid</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Products
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Solar Products
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality solar products
            designed for maximum efficiency and reliability.
          </p>
        </div>
      </section>
      {/* Products Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-blue-600">
                      {product.image}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    {product.price}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-gray-900 font-medium mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-gray-600 mb-6">
              Our experts can help you select the perfect solar products for
              your specific needs.
            </p>
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Products;
