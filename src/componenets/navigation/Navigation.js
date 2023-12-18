import React from "react";
import './navigation.css'

const Navigation = () => {
   return ( 
   <nav class = "navigation-container">
        <ul id="my-navigation" class ="navigation-contents">
            <li>Home</li>
            <li>About me</li>
            <li>Contact</li>
        </ul>
    </nav>
   );
} 

export default Navigation;