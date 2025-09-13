

export default function eventpage() {
  return (
    <section id="events" className="py-16 bg-secondary text-primary text-center mt-1">
      <h2 className="text-3xl font-bold mb-8 text-primary">Discover Upcoming Events</h2>
      <div className="grid md:grid-cols-2 gap-8 px-10">
        <div className="bg-black p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Explore the Location</h3>
          <p className="text-primary">
            Browse events by date, location, category, and more.
          </p>
          <img
          src="https://plus.unsplash.com/premium_photo-1680807869624-07b389d623e8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Event chairs"
          className="rounded-xl shadow-lg w-1/2 h-fit mt-6 ml-26 "
        />
          <button className="mt-4 bg-lime text-black px-6 py-2 rounded-xl font-semibold hover:bg-primary cursor-pointer ">
            Explore
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Event chairs"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  )
}
