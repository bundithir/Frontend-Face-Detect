import React from "react";
import './Face.css';
class Faceregonize extends React.Component{
    render(){
        return(
            <div className="center "> 
            <div className=" absolute mt2" >
                <img id="inputimage" src={this.props.imgurl} width='500px' heigh='auto' alt='phot'/>
                <div className="bounding-box" style={{top: this.props.box.topRow, right: this.props.box.rightCol, bottom: this.props.box.bottomRow, left: this.props.box.leftCol}}></div>
            </div>
            </div>
        );
    }
}


export default Faceregonize;