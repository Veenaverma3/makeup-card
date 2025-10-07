 import React from "react";
import { Sparkles, Scissors, Star, Phone, MessageCircle } from "lucide-react";

const FestivalPackages = () => {
  const packages = [
    {
      title: "Glow Essentials",
      price: 399,
      services: [
        "Clean-up",
        "Full Hand Wax",
        "Full Leg Wax",
        "Threading",
        "Forehead",
        "Upper Lips",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Luxury Radiance",
      price: 599,
      services: [
        "Facial",
        "Bleach",
        "Full Hand Wax",
        "Full Leg Wax",
        "Threading",
        "Forehead",
        "Upper Lips",
      ],
      color: "from-orange-500 to-red-500",
      badge: "Most Popular",
    },
    {
      title: "Hair Spa",
      price: 250,
      services: ["Relaxing Hair Spa + Massage"],
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "Nail Glam",
      price: 450,
      services: ["Nail Extension with Art Design"],
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white py-12 px-4">
      {/* 🌸 Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Star className="text-yellow-400 w-5 h-5 fill-yellow-400" />
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
            Karwa Chauth & Diwali Beauty Offers
          </h1>
          <Star className="text-yellow-400 w-5 h-5 fill-yellow-400" />
        </div>
        <p className="text-sm text-gray-300 mb-4">
          Celebrate your glow this festive season with our exclusive packages!
        </p>
        <div className="inline-flex items-center bg-pink-600/20 text-pink-400 border border-pink-500 rounded-full px-4 py-1 text-xs font-semibold tracking-wide">
          <Scissors className="w-3 h-3 mr-1" />
          Free Haircut with Any Package
        </div>
      </div>

      {/* 💖 Packages Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`relative p-6 rounded-2xl bg-gradient-to-br ${pkg.color} shadow-xl hover:scale-105 transition-all duration-500`}
          >
            {pkg.badge && (
              <div className="absolute top-3 right-3 bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded-full shadow">
                {pkg.badge}
              </div>
            )}
            <h2 className="text-lg font-bold mb-3">{pkg.title}</h2>
            <ul className="space-y-1 text-sm mb-4">
              {pkg.services.map((service, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                  {service}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between mt-2">
              <span className="text-white font-extrabold text-xl">
                ₹{pkg.price}
              </span>
              <button className="bg-white text-pink-600 font-bold text-xs px-3 py-1.5 rounded-full hover:bg-pink-100 transition">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 💬 Contact Section */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-bold text-pink-400">
          Poonam Verma Makeup Studio
        </h3>
        <div className="flex justify-center items-center gap-4 mt-3">
          <a
            href="tel:7495029608"
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
         <a
  href="https://wa.me/917495029608?text=Hi%20Poonam%20Verma!%20I%20want%20to%20know%20about%20your%20festival%20beauty%20packages."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
>
  <MessageCircle className="w-4 h-4" /> WhatsApp
</a>

        </div>
        <p className="text-gray-400 text-xs mt-3">
          Limited time offer — Shine bright this festive season ✨
        </p>
      </div>
    </div>
  );
};

export default FestivalPackages;
