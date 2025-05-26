import { BrainCog, Code2, Settings2, Quote } from "lucide-react";

const services = [
  { title: "CCT", subtitle: "Communication And Collaboration Tool", desc: "A Communication and Collaboration Tool is software designed to help teams communicate effectively, share information, and work together seamlessly, whether in the same office or remotely.", image: "/CCT.png" },
  { title: "CRM", subtitle: "Customer Relationship Management", desc: "It’s a system or strategy used by businesses to manage and analyze interactions with current and potential customers. A CRM system helps streamline processes, organize information, improve customer service, track sales, and support growth by keeping track of all customer communications, sales opportunities, and interactions in one place.", image: "/pngwing.com.png" },
  { title: "IMS", subtitle: "Inventory Management System", desc: "An Inventory Management System (IMS) is a tool designed to help businesses efficiently track, manage, and control their inventory levels.", image: "/IMS.png" },
  { title: "Nano Drone Software", subtitle: "Nano Drone Control", desc: "Nano Drone Software is specialized software designed to control and manage nano-sized drones, often used in applications where precise, small-scale operations are essential.", image: "/NDS.png" },
  { title: "System Healthcare Software", subtitle: "Health Tech Platform", desc: "System Healthcare Software is designed to improve the efficiency, accuracy, and quality of healthcare services.", image: "/SHS.png" },
  { title: "SCMS", subtitle: "Supply Chain Management System", desc: "A Supply Chain Management System (SCMS) is a software solution that manages the flow of goods, data, and finances related to a product or service from the supplier to the customer..", image: "/SCM.png" },
  { title: "Sanvad", subtitle: "Empowering Seamless Conversations and Data-Driven Insights for Smarter Meetings", desc: "Sanvad is an advanced meeting solution that enhances team productivity by recording, transcribing, and analyzing meetings held across Zoom, Microsoft Teams, and Google Meet. With a dedicated meeting bot, Sanvad effortlessly captures every discussion, generating summaries and key insights. This powerful platform integrates seamlessly with popular tools, enabling teams to make informed decisions and drive better outcomes across all your preferred meeting platforms..", image: "/sawand.png" },
];

const whatWeDo = [
  {
    title: "Custom AI Solutions",
    desc: "Tailored AI applications to streamline processes and enhance decision-making.",
    icon: <BrainCog className="w-12 h-12 text-orange-400 mx-auto mb-4" />,
  },
  {
    title: "Software Development",
    desc: "Scalable, innovative software built to meet unique business needs.",
    icon: <Code2 className="w-12 h-12 text-orange-400 mx-auto mb-4" />,
  },
  {
    title: "Automation & Optimization",
    desc: "Smart solutions that automate workflows and improve efficiency.",
    icon: <Settings2 className="w-12 h-12 text-orange-400 mx-auto mb-4" />,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* What We Do Section */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-orange-500 mb-10 text-center border-b-4 border-orange-500 inline-block pb-2">
            What We Do
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {whatWeDo.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-xl p-6 text-center shadow-md hover:shadow-orange-400/20 transition transform hover:scale-105"
              >
                {item.icon}
                <h3 className="text-xl font-bold text-orange-400 mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-orange-500 mb-10 text-center border-b-4 border-orange-500 inline-block pb-2">
            Our Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-xl p-6 shadow-lg border-l-[5px] border-orange-500 text-center hover:shadow-orange-400/30 transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto mb-4 w-20 h-20 object-contain"
                />
                <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
                  {service.title}
                </h3>
                <h4 className="text-md font-bold text-orange-400 mb-4">
                  {service.subtitle}
                </h4>
                <p className="text-gray-300 italic text-sm">{service.desc}</p>
                <Quote className="text-orange-400 w-6 h-6 mx-auto mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
