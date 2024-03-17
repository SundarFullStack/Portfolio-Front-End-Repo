import React,{useContext} from "react";
import "./Techstack.css";
import { TechstackUtilsList } from "../../Utils/TechstackUtilsList";
import {MyContext} from "../../Components/Context/ContextProvider"

const Techstack = () => {

  const { toggle, seToggle } = useContext(MyContext);

  return (
    <>
      <div className={toggle ? "container Stechstack" : "container Btechstack"} id="techStack">
      
          <h4 className="col-12 mt-3 mb-1 text-center">
            Technologies Stack
          </h4>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming languages, frameworks,databases, front-end,
            back-tools, APIs
          </p>
        
              <div className="row">
              
          {TechstackUtilsList.map((tech) => (
           
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <tech.icon className="tech-icon" />
                      <div className="media-body">
                        <h5 className="tech_content">{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          ))}
                      
        </div>
      </div>
    </>
  );
};

export default Techstack;
