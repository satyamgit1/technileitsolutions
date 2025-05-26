export default function AboutPage() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-10 text-center border-b-4 border-orange-500 inline-block pb-2">
          About Us
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-900 rounded-xl shadow-lg p-8">
          {/* Left: Text Content */}
          <div className="flex-1 text-left">
            <p className="text-lg leading-relaxed">
              <span className="text-orange-400 font-semibold">technileitsolutions pvt ltd</span> is a pioneering software and AI development company
              driven by innovation and excellence. We transform visionary ideas into intelligent, scalable solutions that empower
              businesses to lead in the digital age.
            </p>

            <p className="mt-6 text-lg leading-relaxed">
              Our team thrives on creativity and collaboration. We don’t just build software—we craft tailored digital ecosystems that
              accelerate growth, efficiency, and intelligence. Whether you're a startup or an enterprise, we help you make smarter
              moves in a rapidly evolving tech landscape.
            </p>

            <p className="mt-6 text-lg text-orange-300 font-medium">
              Let’s build the future together—with speed, smarts, and soul.
            </p>
          </div>

          {/* Right: Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Technile IT Solutions Logo"
              className="w-40 md:w-150 hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
