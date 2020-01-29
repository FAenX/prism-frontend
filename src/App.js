import React from 'react';
import './App.scss';
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./assets/images/logo.svg";
import {Typography, } from "@material-ui/core"
import clsx from "clsx"
import {WhatsApp, Facebook, Twitter, Instagram} from "@material-ui/icons"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      flip: true
    }
  }

  click=(event)=>{
    event.preventDefault()
    this.setState({flip: !this.state.flip})
  }
  render(){
    
    return (
      <div className="App">
          <AppBar className="top-nav">
            <div className="top-nav-menu-icon">
              <IconButton>
                <MenuIcon className="menu-icon"/>
              </IconButton>
            </div>
         
          </AppBar>
          <div className="cover">
          <div className="under-construction-wrapper">
            <div 
              className={clsx("logo", {
                "flip": this.state.flip
              })} 
              onClick={this.click}
            >
                <img alt="" src={logo} 
            />

            </div>
            <Typography>Website coming soon!</Typography> 
            <div className="contacts">
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <WhatsApp />
              </IconButton>
              
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
             
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
