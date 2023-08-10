import React from "react";
import  LinkedInIcon  from '@mui/icons-material/LinkedIn'
import  GitHubIcon from '@mui/icons-material/GitHub'
import  EmailIcon from '@mui/icons-material/Email'
import "../styles/Home.css"
function Home(){
    return  <div className="home">
        <div className = "about"> 
            <h1> Hi, I'm Supriya</h1>
            <div className=" prompt"> 
                <p>Budding developer with a passion to learn and create
                </p> 
                <LinkedInIcon/>
                <GitHubIcon/>
                <EmailIcon/>
            </div>
        </div>
        <div className = "skills"> 
            <h3> Skills </h3>
            <ol className="list"> 
            <li className="item"> 
                <h> Front-End </h>
                <span> Javascript, HTML, CSS, React</span>
            </li>
            <li className="item"> 
                <h> Back-End </h>
                <span> Django</span>
            </li>
            <li className="item"> 
                <h> Languages </h>
                <span> Python, Java</span>
            </li>
         </ol>
        </div>
    </div> //this div gives the words under navbar 
    
}

export default Home;

