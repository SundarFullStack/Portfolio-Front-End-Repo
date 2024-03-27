import React,{useContext} from "react";
import "./Projects.css";
import ProdImage from "../../Components/Images/ProdApp_Image.png"
import FMSImage from "../../Components/Images/FMS_Image.png"
import NotesImage from "../../Components/Images/Notes_Image.png"
import BlackCartImg from "../../Components/Images/BlackCartImg.png"
import {MyContext} from "../../Components/Context/ContextProvider"
const Projects = () => {

  const { toggle, setToggle } = useContext(MyContext);
  return (
    <>
      <div className={toggle ? "container Sproject" : "container Bproject"} id="project">
        <h4 className="col-12 mt-3 mb-1 text-center">
          Projects
        </h4>
        <hr />
        <p className="pb-3 text-center project-sub-header">
        PAST WORK I DID SUCCESSFULLY
        </p>

        <div className="row" id="ads">
          {/* Production  */}
    
            <div className="col-md-6 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                  src={ProdImage}
                    alt="Product Project Img"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5>Production Application</h5>
                  </div>
                  <a href="https://sundprodapplive.web.app" target="_blank" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* Notes  */}
            <div className="col-md-6 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                  src={NotesImage}
                    alt="Notes Project Image"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 >Notes Application</h5>
                  </div>
                  <a href="https://notes-bba73.web.app" target="_blank" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
          </div>
          {/* Super Market App  */}
          <div className="col-md-6 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                  src={FMSImage}
                    alt="FMS project Image"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 >Super Market Billing App</h5>
                  </div>
                  <a href="https://farmersupermarket-8abbc.web.app" target="_blank" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* WhatsNxt App  */}
            <div className="col-md-6 mt-5">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                  src={BlackCartImg}
                    alt="BlackCart Project Image"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 >BlackCart (E-Comm) App</h5>
                  </div>
                  <a href="https://blackcart-3dbe9.web.app" target="_blank" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
       
        </div>
      </div>
    </>
  );
};

export default Projects;
