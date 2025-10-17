 import React from "react";
import img1 from "./WhatsApp Image 2025-08-21 at 20.57.03_57ee843b.jpg";

const MarriagePackages = () => {
  return (
    <div className="relative w-full h-screen">
      {/* 🌸 Fullscreen Image */}
      <img
        src={img1}
        alt="Bridal Makeup"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🖤 Gradient Shadow on Right Side */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent"></div>

      {/* 💍 Text Overlay (on top of image, right side) */}
      <div className="relative z-10 flex flex-col justify-center h-full items-end pr-6 md:pr-16 text-white max-w-xl ml-auto text-right">
        <h1 className="text-3xl md:text-5xl w-64  font-bold mb-4 text-pink-400">
          Bridal Glow Offer 2025
        </h1>

        <p className="text-gray-200 text-lg mb-4">Bridal + Party Makeup Free</p>

        <ul className="space-y-2 text-gray-300 text-sm md:text-base mb-6">
          <li>✨ Bridal Makeup</li>
          <li>💇‍♀️Professional Hair Styling</li>
          <li>👑 Draping & Jewelry Setting</li>
          <li>🌸 Pre-Bridal Skincare Consultation</li>
        </ul>

        <div>
          <p className="text-gray-400 text-sm">📞 Contact:</p>
          <p className="text-xl font-semibold text-pink-400">
            74950 29608
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarriagePackages;
