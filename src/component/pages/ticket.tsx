import { Link } from "react-router-dom";
export default function ticket() {
  return (
    <section className="py-16 bg-secondary mt-1 text-primary text-center">
      <h2 className="text-3xl font-bold mb-6">Get Your First Ticket</h2>
      <p className="text-primary max-w-xl mx-auto mb-6">
        Secure your seat now and don’t miss out on this amazing event!
      </p>

      
      <Link
        to="/contact"
        className="bg-lime text-secondary px-8 py-3 rounded-xl font-semibold hover:bg-primary cursor-pointer inline-block"
      >
        Get Ticket
      </Link>
    </section>
  )
}
