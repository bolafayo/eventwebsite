import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("newsletterEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") return;

    localStorage.setItem("newsletterEmail", email);
    alert("Email saved to local storage!");
  };

  return (
    <section
      id="contact"
      className="py-14 bg-[#0f0f1a] text-primary text-center mt-1 grid grid-cols-1 md:grid-cols-3 gap-12 "
    >
        <div>
        <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
     
     <form onSubmit={handleSubmit} className="flex justify-center mt-6">
       <input
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)} 
         placeholder="Enter your email"
         className="px-4 py-2 rounded-l-xl outline-none w-72 text-primary border mt-4"
         required
       />
       <button
         type="submit"
         className="bg-lime text-black px-6 py-2 rounded-r-xl font-semibold hover:bg-primary mt-4 cursor-pointer"
       >
         Subscribe
       </button>
     </form>
        </div>
        
      <div className="flex  justify-center space-x-6 mt-8">
     
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          className="hover:text-lime"
        >
          <Facebook size={34} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          className="hover:text-lime"
        >
          <Twitter size={34} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="hover:text-lime"
        >
          <Instagram size={34} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          title="YouTube"
          className="hover:text-lime"
        >
          <Youtube size={34} />
        </a>
      </div>
      
      <nav className="flex flex-col m-5 space-x-8 mt-10 text-lg font-medium">
      <Link to="/Homepage" className="hover:text-lime transition ">
           HOME
          </Link>
          <Link to="/Event" className="hover:text-lime transition ">
           EVENT
          </Link>
          <Link to="/Schedule" className="hover:text-lime transition ">
           SCHEDULE
          </Link>
          <Link to="/Contact" className="hover:text-lime transition ">
           CONTACT US
          </Link>

        
       
      </nav>
    </section>
  );
}
