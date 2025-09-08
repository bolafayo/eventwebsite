import Eventlist from "../ui/eventlist"
import Eventpage from "../ui/eventpage"
import Heropage from "../ui/heropage"
import Footer from "./footer"
import Navbar from "./navbar"

export default function homepage() {
  return (
    <div>
       <Navbar />
       <Heropage />
       <Eventpage />
       <Eventlist />
       <Footer />
    </div>
  )
}
