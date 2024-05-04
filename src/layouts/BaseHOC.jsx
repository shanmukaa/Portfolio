import React  from "react";
import Navbarcomponent from "../components/Navbar.component";
import FooterComponent from "../components/Footer.Component";

const BaseHOC=
    (Component)=>
    ({...props})=>{
        return(
            <div>
                <Navbarcomponent/>
                <Component {...props} />
            </div>
        )
    };

export default BaseHOC;