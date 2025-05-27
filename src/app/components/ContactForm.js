import {
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function ContactForm() {
  return (
    <section className="w-full min-h-screen bg-black text-white py-0 px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        {/* Left Form Section */}
        <form className="w-full h-full bg-gray-900 p-10 flex flex-col justify-center gap-5">
          <h2 className="text-3xl font-extrabold text-orange-500 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-sm text-gray-400">
            Fill out the form and our team will get back to you shortly.
          </p>

          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md bg-black text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-black text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-md bg-black text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full px-4 py-3 rounded-md bg-black text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md shadow-md transition"
          >
            SEND
          </button>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-500 transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-500 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </form>

        {/* Right Map Section */}
        <div className="w-full h-full">
          <iframe
  title="Office Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9567362861476!2d72.47479567547349!3d23.02536067917179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0ba3842e27%3A0xe4b99586f40e564e!2sOne%20World%20West!5e0!3m2!1sen!2sin!4v1748334655820!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-full"
/>

        </div>
      </div>
    </section>
  );
}
