import React from "react";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nameResg : '',
            EmailResg : '',
            PassResg : '',
        }
    }

    OnNameResChan = (e) =>{
        this.setState({
            nameResg : e.target.value
        })
    }

    OnEmailResChan = (e) =>{
        this.setState({
            EmailResg : e.target.value
        })
    }

    OnPassResChan = (e) =>{
        this.setState({
            PassResg : e.target.value
        })
    }

    OnsumbitResg =()=>{
        fetch("http://localhost:5555/register",{
            method:'post',
            headers :{'Content-Type': 'application/json'},
            body : JSON.stringify({
                name : this.state.nameResg ,
                email : this.state.EmailResg,
                password : this.state.PassResg,
            })
        }).then(resp => resp.json())
        .then(user => {
            if(user.id){
                this.props.LoadUser(user);
                this.props.onRouteChange("home");
            }
        })}


    render() {
        return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5 ">
        <main className="pa4 black-80 center">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="Name">Name</label>
                        <input onChange={this.OnNameResChan} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Name"  id="Name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                        <input onChange={this.OnEmailResChan} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                        <input onChange={this.OnPassResChan} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Register" 
                    onClick={this.OnsumbitResg}/>
                </div>
            </div>
        </main>
    </article>    
        );
    }
}


export default Register;