import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <header>
      <nav className= "flex justify-between items-center px-8 py-4 bg-secondary text-primary ">
        <h1 className="text-lime text-3xl  ">
            <span>EVENT</span>
            <span className="text-tertiary ">X</span>
        </h1>
        <ul className="hidden md:flex  text-1xl  space-x-8 font-medium gap-15">
            <li>
            <Link to="/homepage" className=" hover:opacity-80 ">
           HOME
          </Link>
            </li>
            <li>
            <Link to="/event" className=" hover:opacity-80">
           EVENT
          </Link>
            </li>
            <li>
            <Link to="/schedule" className=" hover:opacity-80">
           SCHEDULE
          </Link>
            </li>
            <li>
            <Link to="/contact" className=" hover:opacity-80">
           CONTACT US
          </Link>
            </li>
        </ul>
        <button
     className="md:hidden text-3xl"
     onClick={() => setIsOpen(!isOpen)}
   >
     {isOpen ? <X /> : <Menu />}
   </button>
    </nav>
    {isOpen && (
        <div className="md:hidden bg-secondary text-primary px-8 py-4 space-y-4 text-lg font-medium">
          <Link
            to="/homepage"
            className="block hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/event"
            className="block hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            EVENT
          </Link>
          <Link
            to="/schedule"
            className="block hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            SCHEDULE
          </Link>
          <Link
            to="/contact"
            className="block hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
   </header>
  
  

  )
}
