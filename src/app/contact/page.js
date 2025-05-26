import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Request A Call Back</h1>
      <p className="mb-6">Have a question or need more information? We're here to help!</p>
      <ContactForm />
    </section>
  );
}