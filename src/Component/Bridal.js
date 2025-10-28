 import React from "react";
import { Sparkles, Scissors, Star, Hand, Droplet, Brush } from "lucide-react";
import bridalImg from "./WhatsApp Image 2025-08-21 at 20.57.03_57ee843b.jpg"; // Replace with your image

export default function Bridal() {
  const services = [
    {
      title: "O3 Facial",
      desc: "Oxygenating brightening facial for pre-bridal glow.",
      icon: <Sparkles className="w-6 h-6 text-rose-100" />,
    },
    {
      title: "Full Body Wax",
      desc: "Smooth, gentle waxing for long-lasting results.",
      icon: <Scissors className="w-6 h-6 text-rose-100" />,
    },
    {
      title: "Face & Neck D-tan",
      desc: "Removes sun tan, evens tone & preps skin for makeup.",
      icon: <Droplet className="w-6 h-6 text-rose-100" />,
    },
    {
      title: "Manicure & Pedicure",
      desc: "Nail shaping, cuticle care & polish for a flawless finish.",
      icon: <Hand className="w-6 h-6 text-rose-100" />,
    },
    {
      title: "Threadwork",
      desc: "Precise eyebrow shaping & facial threading.",
      icon: <Brush className="w-6 h-6 text-rose-100" />,
    },
  ];

  return (
    <section className="relative w-full rounded-3xl overflow-hidden shadow-2xl my-10 max-w-6xl mx-auto">
      {/* 🖼️ Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={bridalImg}
          alt="Pre-Bridal Glow"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-rose-900/40 to-black/70"></div>
      </div>

      {/* 💫 Content on Image */}
      <div className="relative z-10 text-center text-white p-6 sm:p-10 flex flex-col items-center justify-center">
        {/* 🌸 Header */}
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Pre-Bridal Glow Package
        </h2>
        <p className="text-sm sm:text-base text-rose-100 max-w-2xl">
          Everything you need to look radiant and confident on your big day ✨
        </p>

        {/* 💖 Price Tag */}
        <div className="mb-8  px-6 py-4 rounded-2xl border border-rose-200 shadow-md inline-block">
          <span className="block text-rose-100 text-sm mb-1">Special Price</span>
          <span className="block text-3xl sm:text-4xl font-bold text-white">
            ₹3,000
          </span>
          <span className="block text-green-300 mt-1 text-sm font-medium">
            💕 One Facial Free
          </span>
        </div>

        {/* 🌷 Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-5  rounded-2xl border border-rose-200/40 shadow hover:shadow-lg transition-all duration-300 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-200/20 rounded-full group-hover:bg-rose-300/30 transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {service.title}
                  </h3>
                  <p className="text-rose-100 text-sm mt-1">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🌟 Offer Highlight */}
        <div className="flex items-center justify-center gap-2 text-green-300 font-semibold mb-6">
          <Star className="w-5 h-5 text-green-300" />
          One facial absolutely free with this package!
        </div>

        {/* 📞 Call to Action */}
        <a
          href="https://wa.me/917495029608"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-rose-500 to-pink-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
        >
          Book on WhatsApp 💌
        </a>

        {/* 📋 Footer */}
        <footer className="mt-8 text-xs text-rose-200">
          *All prices inclusive of taxes. Contact salon for appointment &
          availability.
        </footer>
      </div>
    </section>
  );
}
