import React, {useEffect, useState} from  'react';
import {Link, useLocation}  from "react-router-dom";
import "../styles/Navbar.css" ;
import ReorderIcon from '@material-ui/icons/Reorder';
function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location  = useLocation();
    const [showSupriyaText, setShowSupriyaText] = useState(false);
    useEffect (() =>   {
    setExpandNavbar (false)
    setShowSupriyaText(location.pathname !== '/');
    }, [location])
  return ( 
    <div className  = "navbar" id = { expandNavbar ? "open" : "close"}>
        <div className = "toggleButton"> 
            <button onClick = { () => {setExpandNavbar((prev) => !prev)} }>
                <ReorderIcon>

                </ReorderIcon>

            </button> 
            <h3>Supriya's Profile</h3>
        </div>       
        {showSupriyaText && <div className="supriya">{"Hi, I'm Supriya Gupta"}</div>}

        <div className = "links">         
            <Link to = "/"> Home  </Link>
            <Link to = "/projects"> Projects  </Link>
            <Link to = "/experience"> Experience  </Link>
        </div>
    </div>
  );
}

export default Navbar;