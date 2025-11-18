import { Phone, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg"
          className="w-full h-full object-cover brightness-[0.75]"
          alt="Car wash"
        />
      </div>

      {/* Softer Overlay (not dark) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-800/20 to-transparent"></div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
              AW
            </div>
            <h1 className="text-white text-2xl font-semibold tracking-wide">
              AutoWorks
            </h1>
          </div>

          <a
            href="tel:+18005551234"
            className="hidden md:flex items-center space-x-2 text-white/90 hover:text-blue-300 transition"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">(800) 555-1234</span>
          </a>
        </div>
      </header>

      {/* HERO CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-40 md:py-56">
        <div className="max-w-2xl">

          {/* Badge */}
          <span className="text-blue-600 font-semibold tracking-widest text-xs bg-white/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
            TRUSTED SINCE 2010
          </span>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-5 leading-tight drop-shadow-md">
            Premium Car Wash &
            <span className="block text-blue-300 mt-1 drop-shadow">
              Expert Auto Repair Services
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-100 mt-6 leading-relaxed">
            High-quality detailing, quick repairs, and certified technicians —
            delivering honest pricing and premium service you can depend on.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#booking"
              className="flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </a>

            <a
              href="tel:+18005551234"
              className="flex items-center justify-center px-8 py-4 bg-white/30 backdrop-blur-md border border-white/50 hover:bg-white hover:text-black font-bold rounded-lg transition"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-14 max-w-md text-white">
            <div>
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm text-gray-200">Years Experience</p>
            </div>
            <div className="border-x border-white/20 px-4">
              <p className="text-4xl font-bold">50K+</p>
              <p className="text-sm text-gray-200">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold">4.9</p>
              <p className="text-sm text-gray-200">Rating Score</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
