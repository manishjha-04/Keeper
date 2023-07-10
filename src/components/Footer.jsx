import React from "react";

// remember when you are using javascript (react is also javascript only) then dont forget to use camelcasing 


function Footer(){
    
    const currentYear = new Date().getFullYear();
        return (<footer>    
        <p>copyright {currentYear}</p>
    </footer>);
}

export default Footer;