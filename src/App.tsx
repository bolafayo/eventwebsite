import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './component/pages/homepage';
import Navbar from './component/pages/navbar';
import Heropage from './component/ui/heropage';
import Event from "./component/pages/event";
import SchedulePage from "./component/pages/schedule";
import ContactPage from "./component/pages/contact";

function App() {
 

  return (
    <>
     <BrowserRouter>
    
    <Routes>
  
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/event' element={<Event />}></Route>
      <Route path='/navbar' element={<Navbar />}></Route>
      <Route path='/heropae' element={<Heropage />}></Route>
      <Route path='/schedule' element={<SchedulePage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
     
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
