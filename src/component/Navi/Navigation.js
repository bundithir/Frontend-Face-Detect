import React from "react";

class Navigation extends React.Component{
    render(){
        if(this.props.sign){
            return(
            <nav className=" flex justify-end ">
                        <p className="dim f3 link black pa3 underline pointer" onClick={() => this.props.onRouteChange('signin')}>Sign out</p>
                    </nav>);
        }
        else{
            return(
                <nav className=" flex justify-end ">
                        <p className="dim f3 link black pa3 underline pointer" onClick={() => this.props.onRouteChange('signin')}>Sign in</p>
                        <p className="dim f3 link black pa3 underline pointer" onClick={() => this.props.onRouteChange('register')}>Register</p>
                    </nav>
            );
        }
    }
}


export default Navigation;



/*if(this.props.Valld){
    return(
    <nav className=" flex justify-end ">
                <p className="dim f3 link black pa3 underline pointer" onClick={() => this.props.onRouteChange('signin')}>Sign out</p>
            </nav>);
}
else{
    return(
        <nav className=" flex justify-end ">
                <p className="dim f3 link black pa3 underline pointer" onClick={() => this.props.onRouteChange('signin')}>Sign out</p>
                <p className="dim f3 link black pa3 underline pointer" onClick={() => this.props.onRouteChange('signin')}>Sign out</p>
            </nav>
    );
}

*/