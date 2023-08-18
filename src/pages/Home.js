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
                <div className='socialMedia'>
        <a href="https://www.linkedin.com/in/gupta-supriya/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/supriyagupta07" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="mailto:gupta.supriya.official@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <div className="animation-container">
        {/* Add your animated picture here */}
        <img src="https://th.bing.com/th/id/R.f0fef1eb96e50c4820eee35462a62ab2?rik=OL8TvqhmzhIhrg&pid=ImgRaw&r=0" alt="animation" className="animated-picture" />
      </div>
            </div>
        </div>
        <div className = "skills"> 
            <h3> Skills </h3>
            <ol className="list"> 
            <li className="item"> 
                <h> Front-End </h>
                <span> Javascript, HTML, CSS, React, TailWind CSS</span>
            </li>
            <li className="item"> 
                <h> Back-End </h>
                <span> Django, Flask, Testing, Webservers, APIs, Deployment</span>
              
            </li>
            <li className="item"> 
                <h> Languages </h>
                <span> Python, Java</span>
            </li>
            <li className="item"> 
                <h> Others </h>
                <span> Version controlling(GITHUB)</span>
            </li>
         </ol>
        </div>
        
    </div> //this div gives the words under navbar 
    
}

export default Home;

