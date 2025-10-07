 import React from "react";
import { Sparkles, Scissors, Star, Phone } from "lucide-react";

function App() {
  const packages = [
    {
      price: 399,
      services: [
        "Clean-up",
        "Full Hand Wax",
        "Full Leg Wax",
        "Threading",
        "Forehead",
        "Upper Lips",
      ],
    },
    {
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
      badge: "HOT",
    },
    {
      price: 250,
      services: ["Hair Spa"],
    },
    {
      price: 450,
      services: ["Nail Extension"],
    },
  ];

  return (
    <div className="min-h-screen bg-black/95 p-4 flex justify-center items-center">
      <div className="w-full max-w-md">
        {/* 🌸 Header Section */}
        <div className="bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 rounded-2xl p-5 shadow-lg mb-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <h1 className="text-lg font-extrabold text-white tracking-wide uppercase">
              Karwa Chauth & Diwali
            </h1>
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          </div>
          <p className="text-white/90 text-xs font-semibold mb-3">
            Festival Special Packages
          </p>
          <div className="inline-flex items-center gap-1 bg-white text-pink-600 px-3 py-1 rounded-full font-bold text-[10px] shadow-md">
            <Scissors className="w-3 h-3" />
            Free Haircut on Any Service
          </div>
        </div>

        {/* 💅 Packages Section */}
        <div className="space-y-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {pkg.badge && (
                <div className="absolute top-2 -right-8 rotate-45 bg-red-500 text-white text-[10px] font-bold py-0.5 px-8 shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-stretch">
                {/* 💰 Price Section */}
                <div className="bg-gradient-to-br from-pink-500 to-orange-500 px-4 py-3 flex flex-col justify-center items-center text-white sm:min-w-[90px]">
                  <span className="text-xs font-semibold opacity-90">₹</span>
                  <span className="text-2xl font-extrabold leading-none">
                    {pkg.price}
                  </span>
                </div>

                {/* 🧴 Services Section */}
                <div className="flex-1 p-3">
                  <ul className="space-y-1">
                    {pkg.services.map((service, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-1.5 text-[11px] text-gray-700"
                      >
                        <Sparkles className="w-2.5 h-2.5 text-orange-500" />
                        {service}
                      </li>
                    ))}
                    <li className="flex items-center gap-1.5 text-[11px] pt-1 border-t border-gray-200">
                      <Scissors className="w-2.5 h-2.5 text-green-600" />
                      <span className="text-green-700 font-semibold">
                        Free Haircut
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🕓 Footer Section */}
        <div className="mt-6 text-center space-y-1">
          <p className="text-pink-400 text-sm font-semibold">
            Poonam Verma Makeup Studio
          </p>
          <div className="flex items-center justify-center gap-1 text-gray-300 text-xs">
            <Phone className="w-3 h-3 text-pink-400" />
            <span>Contact: 7495029608</span>
          </div>
          <p className="text-gray-500 text-[10px] mt-1">
            Limited-time offer — celebrate the festivals with grace & glow!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
