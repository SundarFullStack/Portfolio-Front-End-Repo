import React, { useState, useContext } from "react";
import "./Contact.css";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { toast } from "react-toastify";
import axios from "axios";
import { MyContext } from "../../Components/Context/ContextProvider";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Contact = () => {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toggle, setToggle } = useContext(MyContext);

  //handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!fname || !email || !message) {
        toast.error("Please Provide All Fields");
      } else {
        //THis is my url for hosted server in render : https://portfolio-backend-ysm4.onrender.com
        const res = await axios.post(
          "https://portfolio-back-end-repo.onrender.com/api/SendEmail",
          {
            fname,
            email,
            message,
          }
        );
        // console.log('res',res.data.status);
        if (res.status == 200) {
          toast.success(res.data.message);
          // console.log(res.data.message);
          setName("");
          setEmail("");
          setMessage("");
        } else if(res.status==201) {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={toggle ? "Scontact" : "Bcontact"} id="contact">
        <div className="card card0 border-0">
          <h5>Contact Me</h5>
          <h3>LET'S GET IN TOUCH</h3>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xk-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocrCHQ3IPvFcZCuKSDXOYceFldC5FFG8qIQ&usqp=CAU"
                    alt="contact"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="row">
                <div className="contact-links custom-center mt-3">
                  <div>
                    <a
                      href="https://github.com/SundarFullStack/"
                      style={{ color: "black" }}
                      target="_blank"
                      alt="github-page"
                    >
                      <FaGithubSquare className="contact-github-icon" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                      target="_blank"
                      alt="linkedin-page"
                    >
                      <IoLogoLinkedin className="contact-linkedin-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginTop: "29px" }}>
                <div className="row px-3 mb-4">
                  <div className="row px-3">
                    <input
                      type="text"
                      className="mb-3"
                      placeholder="Name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <input
                      type="email"
                      className="mb-3"
                      placeholder="Email"
                      name="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      className="mb-3"
                      placeholder="Message..."
                      name="msg"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button onClick={handleSubmit}>
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
