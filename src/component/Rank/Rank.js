import React from "react";



class Rank extends React.Component  {
    render(){
        return(
            <div className="white">
                <div className="f3">
                {`${this.props.name}, your current entry count is...`}
                </div>
                <div className="f1">
                    {this.props.entries}
                </div>
            </div>
        );
    }

}

export default Rank;