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
            <p> Software Developer Intern
                <h5> Developing, testing, and debugging software code under senior guidance while creating technical documentation, including code comments and user manuals. Strategically proposing and aligning solutions with business goals, fostering robust client relationships, and contributing to the growth of technology-driven initiatives</h5>
            </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date = "Jan 2022 - April 2022"
                iconStyle={{background : "#e9ac5b", color: "black" }}
                icon = {<WorkIcon/>}
            >
            <h3 className="vertical-timeline-element-title">
                 Concentrix
            </h3>
            <p> Technical Advisor <h5>Proposing appropriate strategies, and aligning solutions with business objectives, build strong client relationships and contribute to the growth and advancement of technology-driven initiatives
            </h5></p>
            
            </VerticalTimelineElement>

            <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date = "April 2019 - Dec 2019"
                iconStyle={{background : "#e9ac5b", color: "black" }}
                icon = {<WorkIcon/>}
            >
            <h3 className="vertical-timeline-element-title">
                 Louis Riel Division School
            </h3>
            <p> Computer Mentor For Young Minds <h5>Instructed 2nd graders in the fundamental of computers, empowering them with essential computer skills. Introduced efficient shortcuts to access computer functions, enhancing their productivity and ease of use</h5></p>
            </VerticalTimelineElement>

         </VerticalTimeline>
         </div>;
}

export default Experience;

