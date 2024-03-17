import React,{useContext} from "react";
import "./Workexp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiTestinglibrary } from "react-icons/si";
import { MyContext } from "../../Components/Context/ContextProvider";
const Workexp = () => {
  const { toggle, setToggle } = useContext(MyContext);
  // console.log(toggle)
  return (
    <>
      <div className={toggle ? "Swork" : "Bwork"} id="work">
        <div className="container work-exp">
          <h4 className="col-12 mt-3 mb-1 text-center">
            Work Experience
          </h4>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2021 - 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiTestinglibrary />}
            >
              <h6 className="vertical-timeline-element-title" style={{fontWeight:"bold"
    ,fontSize: "20px"}}>
                System Engineer
              </h6>
              <p className="vertical-timeline-element-subtitle"style={{fontSize: "17px"}}>
                Saint Gobain PVT LTD,Chennai
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Workexp;
