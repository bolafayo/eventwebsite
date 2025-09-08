import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './component/pages/homepage';
import Navbar from './component/pages/navbar';
import Heropage from './component/ui/heropage';

function App() {
 

  return (
    <>
     <BrowserRouter>
    
    <Routes>
  
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/navbar' element={<Navbar />}></Route>
      <Route path='/heropae' element={<Heropage />}></Route>
     
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
