import { Link } from "react-router-dom";
import  { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "./navbar";
import Newsletter from "./newsletter";
import Footer from "./footer";

const events = [
  {
    id: 1,
    title: "Tech Innovation Conference",
    description: "Join industry leaders to explore the future of technology.",
    date: "October 15, 2025",
    venue: "Lagos Civic Centre",
    image:
      "https://i.pinimg.com/1200x/18/84/03/188403addb1f7f343fab8d949388706c.jpg",
    ticketLink: "#",
  },
  {
    id: 2,
    title: "Creative Design Workshop",
    description: "A hands-on session with top UI/UX designers.",
    date: "November 2, 2025",
    venue: "Abuja Conference Hall",
    image:
      "https://i.pinimg.com/736x/06/ee/ec/06eeec82850b17bb073a5b5fad2b1524.jpg",
    ticketLink: "#",
  },
  {
    id: 3,
    title: "Startup Pitch Night",
    description: "Watch startups pitch their groundbreaking ideas.",
    date: "December 10, 2025",
    venue: "Victoria Island Hub",
    image:
      "https://i.pinimg.com/736x/23/4f/c3/234fc37a497cda3f0c9b6acc42d9e653.jpg",
    ticketLink: "#",
  },
  {
    id: 4,
    title: "Health & Wellness Expo",
    description:
      "Discover the latest trends in fitness, nutrition, and wellness.",
    date: "January 20, 2026",
    venue: "Eko Hotel Convention Center",
    image:
      "https://i.pinimg.com/1200x/11/8d/38/118d38b2bc1a9c6489b0cc8292d58dbd.jpg",
    ticketLink: "#",
  },
  {
    id: 5,
    title: "Music & Arts Festival",
    description: "A celebration of culture, music, art, and creativity.",
    date: "February 12, 2026",
    venue: "National Arts Theatre",
    image:
      "https://i.pinimg.com/1200x/0b/c4/12/0bc412c5af40c081f283c80fc0048918.jpg",
    ticketLink: "#",
  },
  {
    id: 6,
    title: "Business Leadership Summit",
    description: "Inspiring talks and workshops from global business leaders.",
    date: "March 8, 2026",
    venue: "Landmark Centre, Lagos",
    image:
      "https://i.pinimg.com/736x/76/1a/4f/761a4fa859a207ceb4effc60b0247b88.jpg",
    ticketLink: "#",
  },
  {
    id: 7,
    title: "AI & Machine Learning Forum",
    description: "Exploring the impact of AI on different industries.",
    date: "March 22, 2026",
    venue: "Tech Hub Abuja",
    image: "https://i.pinimg.com/736x/74/e6/a9/74e6a93a7d2bd32b5c611131e51f1fd7.jpg",
    ticketLink: "#",
  },
  {
    id: 8,
    title: "Blockchain Expo",
    description: "Dive into blockchain, NFTs, and Web3 technologies.",
    date: "April 15, 2026",
    venue: "Eko Atlantic City",
    image: "https://i.pinimg.com/1200x/1b/cb/4a/1bcb4aae4a9da7dfebe6452fcdf49ae9.jpg",
    ticketLink: "#",
  },
  {
    id: 9,
    title: "Women in Tech Summit",
    description: "Empowering women in technology and entrepreneurship.",
    date: "May 5, 2026",
    venue: "Sheraton Hotel, Lagos",
    image: "https://i.pinimg.com/1200x/3f/35/9d/3f359de4d212cc7be8e4996f2bf864ea.jpg",
    ticketLink: "#",
  },
  {
    id: 10,
    title: "Film & Media Expo",
    description: "Celebrating African film, culture, and media innovations.",
    date: "June 10, 2026",
    venue: "Freedom Park, Lagos",
    image: "https://i.pinimg.com/1200x/71/24/ce/7124ce86b0643189c796cf558a0529d8.jpg",
    ticketLink: "#",
  },
  {
    id: 11,
    title: "Food & Drinks Festival",
    description: "A taste of African cuisine, drinks, and culture.",
    date: "July 18, 2026",
    venue: "Lekki Leisure Lake",
    image: "https://i.pinimg.com/1200x/91/8a/fb/918afbb8b108344338b716292c26b303.jpg",
    ticketLink: "#",
  },
  {
    id: 12,
    title: "Green Energy Conference",
    description: "Future of renewable energy and sustainable living.",
    date: "August 12, 2026",
    venue: "Abuja Energy Hub",
    image: "https://i.pinimg.com/736x/54/ab/44/54ab44b674cf2dd5462084351a3344e4.jpg",
    ticketLink: "#",
  },
];

export default function EventsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
  
    const eventsPerPage = 6;
  
   
    const filteredEvents = events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
   
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = filteredEvents.slice(
      indexOfFirstEvent,
      indexOfLastEvent
    );
  
    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  
    return (
      <>
        <Navbar />
        <section
          id="events"
          className="py-16 bg-secondary text-primary text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Discover Upcoming Events</h2>
  
      
       <div className="flex justify-center">
       <div className="relative sm:w-96 md:w-1/2 text-primary bg-[#0f0f1a] rounded-2xl  m-6 p-1 " >
    <Search
      size={20}
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary"
    />
    <input
      type="text"
      placeholder="Search events by title, venue or description..."
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); 
      }}
      className="pl-10 pr-4 py-2 w-full rounded-lg text-primary outline-none "
            />
          </div>
       </div>

  
         
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
            {currentEvents.length > 0 ? (
              currentEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#0f0f1a] p-6 rounded-xl shadow-lg flex flex-col hover:scale-105 transition-transform"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg mb-4 h-48 w-full object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-primary text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <p className="text-primary text-sm mb-2">{event.venue}</p>
                  <p className="text-primary text-sm mb-4">{event.date}</p>
               
                    <Link
        to="/contact"
        className="mt-auto bg-lime text-black px-4 py-2 rounded-lg font-semibold hover:bg-lime"
      >
        Get Ticket
      </Link>
                </div>
              ))
            ) : (
              <p className="col-span-full text-gray-400">
                No events match your search.
              </p>
            )}
          </div>
  
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-lime text-black font-bold"
                      : "bg-primary hover:primary   text-black"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </section>
        <Newsletter />
        <Footer />
      </>
    );
  }