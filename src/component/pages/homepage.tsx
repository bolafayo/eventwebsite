import Eventlist from "../ui/eventlist"
import Eventpage from "../ui/eventpage"
import Heropage from "../ui/heropage"
import Footer from "./footer"
import Navbar from "./navbar"
import Eventcard from "../ui/eventcard"
import Venue from "./venue"
import Ticket from "./ticket"
import Newsletter from "./newsletter"


export default function homepage() {
  return (
    <div>
       <Navbar />
       <Heropage />
       <Eventcard />
       <Ticket />
       <Venue />
       <Eventpage />
       <Eventlist />
       <Newsletter />
       <Footer />
    </div>
  )
}
