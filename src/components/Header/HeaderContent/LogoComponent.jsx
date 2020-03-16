import React from "react";

const LogoComponent = function({logoSrc}){
    return (
        <div className="header_content_logo">
            <a href={window.location.origin}>
                <img src={logoSrc} alt="Kamil Bartusik Shop"/>
            </a>
        </div>
    )
}
export default LogoComponent;
