import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../Assets/AIpicture.jpeg";
import Proj2 from "../Assets/diary.jpeg";
// import {ProjectList} from "../helpers/ProjectList";
import "../styles/Projects.css";
//import Image
function Projects(){
    return (
    <div className="projects"> 
        <h1> My Projects </h1>
        <div className="projectList">
            <ProjectItem name = "y5tytyty" image = {Proj1}> 
            </ProjectItem>

            <ProjectItem name = "gi" image = {Proj2}> 

            </ProjectItem>
        </div>
    </div>
);
}

export default Projects;

