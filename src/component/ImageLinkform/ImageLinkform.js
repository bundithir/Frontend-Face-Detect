import React from "react";
import  "../../App.css";
import "./ImgLink.css";
class ImageLinkform extends React.Component{
    render(){
        return(
            <div>
                <p className="f3">
                    AAAAAAAAAAAAAAAAAAAA
                </p>
                <div className="center">
                    <div className="center form pa4 br3 shadow-3">
                        <input type='text' className=" center pa2 f4 w-70" onChange={this.props.onInputChange} />
                        <button type="submit" className="w-30 f4 grow link dib pv2 ph3 b--none white bg-light-purple" onClick={this.props.onSubmit}>DETECT</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default ImageLinkform;