

export default function heropage() {
  return (
   <section  className="text-center py-20 bg-secondary text-white">
    <h1 className="text-5xl font-extrabold mb-4">
        BOOK <span className="text-tertiary">AND EXPLORE</span> UPCOMING <span className="text-lime">EVENTS</span>
      </h1>
      <p className="text-primary max-w-2xl mx-auto mb-6">
        Welcome to EventX, the ultimate destination for discovering and booking upcoming events.
      </p>
      <button className="bg-lime text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-primary">
        Book Your Seat
      </button>
   </section>
  )
}

