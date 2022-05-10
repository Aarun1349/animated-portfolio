import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Service from "./component/Service";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
function App() {
  return(
    <div style={{justifyContent:"space-between"}}>
  
  <Router>
  <Navbar/> 
    <Routes>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/service" element={<Service />}></Route>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
    </Router>
   <Footer/>
    
  </div>
  )

  
}

export default App;
