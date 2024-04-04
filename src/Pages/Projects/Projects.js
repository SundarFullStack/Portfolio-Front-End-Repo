import React, { useContext } from "react";
import "./Projects.css";
import ProdImage from "../../Components/Images/ProdApp_Image.png";
import FMSImage from "../../Components/Images/FMS_Image.png";
import NotesImage from "../../Components/Images/Notes_Image.png";
import BlackCartImg from "../../Components/Images/BlackCartImg.png";
import { MyContext } from "../../Components/Context/ContextProvider";
import { BsGithub } from "react-icons/bs";
const Projects = () => {
  const { toggle, setToggle } = useContext(MyContext);
  return (
    <>
      <div
        className={toggle ? "container Sproject" : "container Bproject"}
        id="project"
      >
        <h4 className="mt-3 mb-1 text-center">Projects</h4>
        <hr />
        <p className="pb-3 text-center project-sub-header">
          PAST WORK I DID SUCCESSFULLY
        </p>
        <div className="row cred-container">
          <p className="cred-title">Default User Credentials:</p>
          <p className="cred-head">Username:<span className="cred-content"> sundarproductuser@gmail.com</span></p>
          <p  className="cred-head">Password:<span className="cred-content"> user@12345</span></p>
        </div>

        <div className="row" id="ads">
          {/* Production  */}

          <div className="col-md-6 mt-5">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={ProdImage} alt="Product Project Img" />
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
                  {/* Github Links for project */}
                  <div className="row github-codes custom-center mt-2">
                  <a
                    href="https://github.com/SundarFullStack/ProductionApp_FrontEnd"
                    target="_blank"
                    className="col-lg-6 col-md-12 col-sm-12 git-btn"
                  >
                    <BsGithub /> Front End Code
                  </a>
                  <a
                    href="https://github.com/SundarFullStack/PA_BackendRepository"
                    target="_blank"
                    className="col-lg-6 col-md-12 col-sm-12 git-btn"
                  >
                    <BsGithub /> Back End Code
                  </a>
                </div>
                <a
                  href="https://sundprodapplive.web.app"
                  target="_blank"
                  className="ad-btn"
                >
                  View Page
                </a>
              </div>
            </div>
          </div>
          {/* Notes  */}
          <div className="col-md-6 mt-5">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={NotesImage} alt="Notes Project Image" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Notes Application</h5>
                </div>
                {/* Github Links for project */}
                <div className="row github-codes custom-center mt-2">
                  <a
                    href="https://github.com/SundarFullStack/NotesAppFrontEnd"
                    target="_blank"
                    className="col-lg-6 col-md-12 col-sm-12 git-btn"
                  >
                    <BsGithub /> Front End Code
                  </a>
                  <a
                    href="https://github.com/SundarFullStack/NotesBackendRepo"
                    target="_blank"
                    className="col-lg-6 col-md-12 col-sm-12 git-btn"
                  >
                    <BsGithub /> Back End Code
                  </a>
                </div>
                {/* View Page */}
                <a
                  href="https://notes-bba73.web.app"
                  target="_blank"
                  className="ad-btn"
                >
                  View Page
                </a>
              </div>
            </div>
          </div>
          {/* Super Market App  */}
          <div className="col-md-6 mt-5">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={FMSImage} alt="FMS project Image" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>Super Market Billing App</h5>
                </div>
                  {/* Github Links for project */}
                  <div className="row github-codes custom-center mt-2">
                  <a
                    href="https://github.com/SundarFullStack/FMS_FrontEnd"
                    target="_blank"
                    className="col-lg-6 col-md-12 col-sm-12 git-btn"
                  >
                    <BsGithub /> Front End Code
                  </a>
                  <a
                    href="https://github.com/SundarFullStack/FMS_BACKEND_REPO"
                    target="_blank"
                    className="col-lg-6 col-md-12 col-sm-12 git-btn"
                  >
                    <BsGithub /> Back End Code
                  </a>
                </div>
                <a
                  href="https://farmersupermarket-8abbc.web.app"
                  target="_blank"
                  className="ad-btn"
                >
                  View Page
                </a>
              </div>
            </div>
          </div>
          {/* WhatsNxt App  */}
          <div className="col-md-6 mt-5">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={BlackCartImg} alt="BlackCart Project Image" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">MongoDB</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5>BlackCart (E-Comm) App</h5>
                </div>
                  {/* Github Links for project */}
                  <div className="row github-codes custom-center mt-2">
                  <a
                    href="https://github.com/SundarFullStack/BlackCart-Front-End-Repo"
                    target="_blank"
                    className="col-lg-6 col-md-12 col-sm-12 git-btn"
                  >
                    <BsGithub /> Front End Code
                  </a>
                  <a
                    href="https://github.com/SundarFullStack/BlackCart-BackEnd-Repo"
                    target="_blank"
                    className="col-lg-6 col-md-12 col-sm-12 git-btn"
                  >
                    <BsGithub /> Back End Code
                  </a>
                </div>
                <a
                  href="https://blackcart-3dbe9.web.app"
                  target="_blank"
                  className="ad-btn"
                >
                  View Page
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
