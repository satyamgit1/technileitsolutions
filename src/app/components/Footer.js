"use client";

import { Linkedin, Twitter, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold text-orange-500 mb-4">Find Us</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Looking to connect with us?
            <br />
            We're just a call or message away.
          </p>
          <p className="mt-4 text-sm">
            📞 <span className="text-orange-400">(+91) 8369633838</span>
          </p>
          <p className="text-sm">
            📧{" "}
            <a
              href="mailto:contact@technileitsolutions.com"
              className="text-orange-400 hover:underline"
            >
              contact@technileitsolutions.com
            </a>
          </p>

          {/* Address Section */}
          <div className="flex items-start gap-2 mt-4 text-sm">
            <MapPin className="w-4 h-4 text-orange-400 mt-0.5" />
            <span>
              <strong>Address:</strong> 1201, One World West, Ambli T junction, Ahmedabad, Gujarat – 380058
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div>
          <h2 className="text-xl font-bold text-orange-500 mb-4">Newsletter</h2>
          <p className="text-gray-400 text-sm mb-3">
            Stay updated with our latest AI tools and tech insights.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 rounded-md text-white font-semibold shadow"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Technile IT Solutions. All rights reserved.
      </div>
    </footer>
  );
}
