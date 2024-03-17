import React, { useContext } from "react";
import "./About.css";
import Image from "../../Components/Images/MyPhoto_WOB.png";
import { MyContext } from "../../Components/Context/ContextProvider";
const About = () => {
  const { toggle, setToggle } = useContext(MyContext);

  return (
    <>
      <div className={toggle ? "Tabout" : "NTabout"} id="about">
        <div className="row">
        <h5 className="custom-center">About Me</h5>
        <h4 className="project-sub-header custom-center">WELCOME TO MY SITE</h4>
          {/* <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={Image} alt="profile_pic" />
            </div> */}
          <div className="col-md-12 col-xl-12 col-lg-12 col-xs-12 about-content">
            {/* <h1>About Me</h1> */}
            <h6 className="pb-3 text-center custom-center" id="aboutMe-Header">
              I'M BEGINNER IN WEB DESIGNING AND DEVELOPMENT
            </h6>
            <div className="table-responsive">
            <table className="custom-center">
              <tbody>
                <tr>
                  <td className="table-head">Name </td>
                  <td><span className="colon">:</span>Meenakshi Sundar T</td>
                </tr>
                <tr>
                  <td className="table-head">Age</td>
                  <td><span className="colon">:</span>22</td>
                </tr>
                <tr>
                  <td className="table-head">Email</td>
                  <td><span className="colon">:</span>meenakshisunder183017@gmail.com</td>
                </tr>
                <tr>
                  <td className="table-head">Education</td>
                  <td><span className="colon">:</span>Diploma</td>
                </tr>
                <tr>
                  <td className="table-head">Language</td>
                  <td><span className="colon">:</span>English</td>
                </tr>
                <tr>
                  <td  className="table-head">Phone</td>
                  <td><span className="colon">:</span>7604977254</td>
                </tr>
             </tbody>
            </table>
            </div>
            {/* <p style={{ fontWeight: "bold", color: "grey" }}>
              <span className="about-details">Name</span> : Meenakshi Sundar
            </p>
            <p
              style={{ fontWeight: "bold", color: "grey", marginLeft: "-61px" }}
            >
              <span className="about-details">Age</span> : 21 years old
            </p>
            <p
              style={{ fontWeight: "bold", color: "grey", marginLeft: "-46px" }}
            >
              <span className="about-details">Language</span> : English
            </p>
            <p
              style={{ fontWeight: "bold", color: "grey", marginLeft: "-38px" }}
            >
              <span className="about-details">Phone</span> : 7604977254
            </p>
            <p
              style={{ fontWeight: "bold", color: "grey", marginLeft: "143px" }}
            >
              <span className="about-details">Email</span> :
              meenakshisunder183017@gmail.com
            </p>
            <p
              style={{ fontWeight: "bold", color: "grey", marginLeft: "-42px" }}
            >
              <span className="about-details">Education</span> : Diploma
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
