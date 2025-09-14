import React, { useState } from "react";
import Navbar from "./navbar";
import Newsletter from "./newsletter";
import Footer from "./footer";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    const messages = JSON.parse(localStorage.getItem("messages") || "[]");
    messages.push(formData);
    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="py-16 bg-secondary text-primary">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-6 text-primary">
              Have questions about the event? Send us a message and we’ll get back to you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg text-primary border outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg text-primary border outline-none"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 rounded-lg text-primary border outline-none"
                required
              />
              <button
                type="submit"
                className="bg-lime text-black border px-6 py-3 rounded-lg font-semibold hover:bg-primary"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
            <p className="mb-4">Lagos Civic Centre, Victoria Island, Lagos</p>
            <p className="mb-4">📧 info@eventhub.com</p>
            <p className="mb-6">📞 +234 700 123 4567</p>

           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6142072325406!2d3.428552914324434!3d6.42909272634148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52cf29dce3d%3A0x7ad0f8b4c6f5e556!2sLagos%20Civic%20Centre!5e0!3m2!1sen!2sng!4v1693928377483!5m2!1sen!2sng"
              width="100%"
              height="200"
              title="map"
              loading="lazy"
              className="rounded-lg border-0"
            ></iframe>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}
