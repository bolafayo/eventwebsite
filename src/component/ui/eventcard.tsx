

export default function eventcard() {
  return (
    <section id="schedule" className="py-16 bg-secondary text-primary text-center">
      <h2 className="text-4xl font-bold mb-8">Event Schedule</h2>
      <div className="grid md:grid-cols-3 gap-6 px-10">
        <div className="bg-[#0f0f1a] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Day 1</h3>
          <p className="text-primary">Opening Ceremony & Keynote Speech</p>
        </div>
        <div className="bg-[#0f0f1a] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Day 2</h3>
          <p className="text-primary">Workshops & Panel Discussions</p>
        </div>
        <div className="bg-[#0f0f1a] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Day 3</h3>
          <p className="text-primary">Closing Event & Networking</p>
        </div>
      </div>
    </section>
  )
}
