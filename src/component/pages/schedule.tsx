
import Navbar from "./navbar";
import Newsletter from "./newsletter";
import Footer from "./footer";

const schedule = [
  {
    id: 1,
    time: "09:00 AM - 10:00 AM",
    title: "Opening Keynote: The Future of Tech",
    speaker: "Dr. Ada Lovelace",
    venue: "Main Hall",
  },
  {
    id: 2,
    time: "10:15 AM - 11:00 AM",
    title: "AI & Machine Learning Trends",
    speaker: "Elon Turing",
    venue: "Tech Room 1",
  },
  {
    id: 3,
    time: "11:15 AM - 12:00 PM",
    title: "Design Thinking Workshop",
    speaker: "Grace Hopper",
    venue: "Workshop Hub",
  },
  {
    id: 4,
    time: "12:00 PM - 01:00 PM",
    title: "Networking & Lunch Break",
    speaker: "-",
    venue: "Cafeteria",
  },
  {
    id: 5,
    time: "01:00 PM - 02:00 PM",
    title: "Blockchain & Web3 Innovations",
    speaker: "Satoshi Nakamoto",
    venue: "Main Hall",
  },
  {
    id: 6,
    time: "02:15 PM - 03:00 PM",
    title: "Women in Tech Panel",
    speaker: "Panel of Industry Leaders",
    venue: "Conference Room A",
  },
  {
    id: 7,
    time: "03:15 PM - 04:00 PM",
    title: "Closing Keynote & Q&A",
    speaker: "Dr. Alan Kay",
    venue: "Main Hall",
  },
];

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <section id="schedule" className="py-16 bg-secondary text-primary text-center">
        <h2 className="text-5xl font-bold mb-10">Event Schedule</h2>

        <div className="max-w-4xl mx-auto px-6">
          {schedule.map((item) => (
            <div
              key={item.id}
              className="bg-[#0f0f1a] rounded-xl p-6 mb-6 shadow-lg hover:scale-105 transition-transform text-left"
            >
              <p className="text-lime font-semibold">{item.time}</p>
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <p className="text-primary mt-1">🎤 {item.speaker}</p>
              <p className="text-primary text-sm">📍 {item.venue}</p>
            </div>
          ))}
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}
