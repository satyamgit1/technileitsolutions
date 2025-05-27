
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import ContactPage from "./contact/page";

export default function HomePage() {
  return (
    <>

      <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 pt-0 pb-10 overflow-hidden">
        {/* Decorative Glow Effects */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-orange-500 opacity-20 rounded-full blur-3xl z-0 animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-orange-500 opacity-10 rounded-full blur-2xl z-0 animate-ping" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Technile IT Solutions Logo"
            className="mx-auto w-32 md:w-52 mt-[-10px] mb-1 animate-bounce"
          />

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-orange-500">
            Empowering Innovation <br />
            with{" "}
            <span className="text-white">
              AI Powered Technile IT Solutions Software
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            At{" "}
            <span className="font-bold text-orange-400">
              Technile IT Solutions
            </span>
            , we build intelligent, scalable, and future-ready tech solutions
            that drive business transformation.
          </p>

          {/* Call To Action Buttons */}
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="/services"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full font-semibold shadow-lg transition"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg rounded-full font-semibold transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Sections Below Hero */}
      <AboutPage />
      <ServicesPage />
      <ContactPage />

    </>
  );
}
