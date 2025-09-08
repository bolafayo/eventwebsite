import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#1e2132] text-[#f6f9ff] ">
        <h1 className="text-[#dcf868] -400 text-3xl  ">
            <span>EVENT</span>
            <span className="text-[#735cd6] ">X</span>
        </h1>
        <ul className="text-1xl  flex space-x-8 font-medium gap-15">
            <li>
            <Link to="/home" className=" hover:opacity-80 ">
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
    </nav>
  )
}
