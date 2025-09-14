const speakers = [
    { name: "Esther Howard", role: "UX Designer", img: "https://i.pinimg.com/1200x/8f/f1/30/8ff13041183fb969739324dd55086088.jpg" },
    { name: "Cody Fisher", role: "Brand Designer", img: "https://i.pinimg.com/1200x/ec/d4/d6/ecd4d657a87e11d13b6bb104705334fa.jpg" },
    { name: "Dianne Russell", role: "Graphic Designer", img: "https://i.pinimg.com/736x/a9/f9/6d/a9f96dd00b0d14a04cbd25bf1e7a3f2c.jpg" },
  ];

export default function eventlist() {
  return (
    <section id="speakers" className="py-16 bg-black text-primary text-center">
      <h2 className="text-4xl font-bold mb-10">Our Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {speakers.map((speaker, index) => (
          <div key={index} className="bg-black p-6 rounded-xl shadow-lg">
            <img
              src={speaker.img}
              alt={speaker.name}
              className="w-82 h-82 mx-2 mb-2"
            />
            <h3 className="text-xl font-semibold">{speaker.name}</h3>
            <p className="text-primary">{speaker.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
