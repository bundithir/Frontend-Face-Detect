import React from "react";

class Sign extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emailSign : "",
            passSign : "",
        }
    }

    OnEmailSign =(e) =>{
        this.setState({
            emailSign : e.target.value
        })
    }

    OnPassSign =(e)=>{
        this.setState({
            passSign : e.target.value
        })
    }

    Onsubmit =()=>{
        fetch("http://localhost:5555/signin",{
            method:'post',
            headers :{'Content-Type': 'application/json'},
            body : JSON.stringify({
                email : this.state.emailSign ,
                password : this.state.passSign
            })
        }).then(resp => resp.json())
        .then(user => {
            if(user.id){
                this.props.LoadUser(user);
                this.props.onRouteChange("home");
            }
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5 ">
        <main className="pa4 black-80 center">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                        <input onChange={this.OnEmailSign} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                        <input onChange={this.OnPassSign} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    <label className="pa0 ma0 lh-copy f5 pointer"><input type="checkbox" /> Remember me</label>
                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Sign in" 
                    onClick={this.Onsubmit}/>
                </div>
                <div className="lh-copy mt3">
                    <p onClick={() => this.props.onRouteChange('register')} className="f4 link dim black db pointer" >Register</p>
                </div>
            </div>
        </main>
    </article>    
        );
    }
}


export default Sign;