import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
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
      <p>&copy; 2023 guptasupriya.com</p>
    </div>
  );
}

export default Footer;
