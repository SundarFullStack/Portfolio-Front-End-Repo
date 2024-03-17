import "./App.css";
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About/About";
import Techstack from "./Pages/Techstack/Techstack";
import Projects from "./Pages/Projects/Projects";
import Workexperience from "./Pages/Workexp/Workexp";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./Components/MobileNav/MobileNav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container" style={{ overflow: "hidden" }}>
          <About />
          <Techstack />
          <Projects />
          <Workexperience />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
         
            <h5 className="text-center footer-content" style={{marginTop:"35px"}}>
               &copy; 2023, Personal.All Rights Reserved By: <span style={{color:"rgb(62 177 197)"}}>SundarStack.</span>
            </h5>
        
        </div>
      </div>
      <ScrollToTop
        smooth
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
        color="#f29f67"
      />
    </>
  );
}

export default App;
