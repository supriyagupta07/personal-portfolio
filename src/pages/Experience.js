import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
function Experience(){
    return <div className = "experience" >
         <VerticalTimeline lineColor="#21325e"> 
            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date = "Aug 2018 - Dec 2023 "
                iconStyle={{background : "#627aac", color: "white" }}
                icon = {<SchoolIcon/>}
            >
            <h3 className="vertical-timeline-element-title">
                 University Of Manitoba
            </h3>
            <p> Bachelors of Computer Science </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date = "May 2021 - Dec 2021"
                iconStyle={{background : "#e9ac5b", color: "black" }}
                icon = {<WorkIcon/>}
            >
            <h3 className="vertical-timeline-element-title">
                 GAO Tek
            </h3>
            <p> Software Developer Intern</p>
            </VerticalTimelineElement>

         </VerticalTimeline>
         </div>;
}

export default Experience;

