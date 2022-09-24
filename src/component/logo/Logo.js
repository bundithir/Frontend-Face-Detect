import React from "react";
import './Logo.css';
import Tilt from 'react-parallax-tilt';
import brain from './logo_transparent.png';
class Logo extends React.Component{
    render(){
        return(
            <div className="ma2 mt0 ml5 -absolute">
                <Tilt className="Tilt br2 shadow-2" style={{height:'150px',width:'150px'}}>
                    <img src={brain} alt = 'logo' className="mt2"/>
                </Tilt>
            </div>
        );
    }
}


export default Logo;