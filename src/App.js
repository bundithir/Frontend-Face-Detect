import React from "react";
import "./App.css"
import Navigation from "./component/Navi/Navigation";
import Logo from "./component/logo/Logo";
import ImageLinkform from "./component/ImageLinkform/ImageLinkform";
import Faceregonize from "./component/FaceReg/Faceregonize";
import Rank from "./component/Rank/Rank";
import Partic from "./component/particel/particle";
import Sign from "./component/Singin/Sign";
import Register from "./component/Register/Register";

const InitialState = {
  input :'',
  route: 'signin',
  Validsign : false ,
  imgURL : '',
  box:{},
  User : {
    id : '',
    name : '',
    email : '',
    entries : 0 ,
    joined : ''
  }
};

class App extends React.Component{
  constructor(){
    super();
    this.state = InitialState;
  }



  LoadUser=(data)=>{
    this.setState({
      User : {
        id : data.id,
        name :data.name ,
        email : data.email,
        entries : data.entries ,
        joined : data.joined
      }
    })
  }

  onRouteChange=(page)=>{
    if(page === 'home'){
      this.setState({Validsign : true})
    }else if(page === 'signin'){
      this.setState(InitialState)
    }else{
      this.setState({Validsign : false})
    }
    this.setState({
      route : page
    })
  }

  onInputChange =(e) =>{
    this.setState({
      input: e.target.value 
    })
  }

  CalculateBox = (info) =>{
    const face = info.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
  }

  DisplayBoundingBox = (box) => {
    this.setState({box: box});
  }

  onSubmit = () => {
    this.setState({
      imgURL: this.state.input
    })
    fetch("http://localhost:5555/imageurl",{
          method : "post",
          headers :{'Content-Type': 'application/json'},
          body : JSON.stringify({
          input : this.state.input ,
        })
      }) 
    .then((response) => response.json())
    .then((result) => {
      if(result){
        fetch("http://localhost:5555/image",{
          method : "put",
          headers :{'Content-Type': 'application/json'},
          body : JSON.stringify({
          id : this.state.User.id ,
        }) 
        }).then(respone => respone.json())
        .then(entry => {
          this.setState(Object.assign(this.state.User,{entries : entry}))
        })
        .catch(err => console.log("ERROR"))
      }
      this.DisplayBoundingBox(this.CalculateBox(result))})
    .catch((error) => console.log("error", error))
  };
  

  render(){
    return (
      <div className="App">
        <Partic />
        <Navigation onRouteChange={this.onRouteChange} sign ={this.state.Validsign}/>
        {this.state.route === 'home'? 
          <div>
              <Logo />
              <Rank name={this.state.User.name} entries={this.state.User.entries} />
              <ImageLinkform onInputChange = {this.onInputChange} onSubmit={this.onSubmit}/>
              <Faceregonize box={this.state.box} imgurl={this.state.imgURL}/>
            </div>

            :

            (this.state.route === 'signin'?
              <Sign LoadUser={this.LoadUser} onRouteChange={this.onRouteChange} />
              :
              <Register LoadUser={this.LoadUser} onRouteChange={this.onRouteChange} />
            )

        }

      </div>
    )
  }
}


export default App;