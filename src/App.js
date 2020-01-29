import React from 'react';
import './App.scss';
import AppBar from "@material-ui/core/AppBar"
import Icon from "@material-ui/core/Icon";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./assets/images/logo.svg";
import clsx from "clsx"
import {WhatsApp, Facebook, Twitter, Instagram} from "@material-ui/icons"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      flip: true,
      social:{
        facebook: false,
        twitter: false,
        instagram: false,
        whatsapp: false  
      }
      
    }
  }

  click=(event)=>{
    event.preventDefault()
    this.setState({flip: !this.state.flip})
  }

  socialEffect=(event)=>{
    event.preventDefault()
    let social = this.state.social
    let key = event.target.id
    
    social[key]=true
    this.setState({social})

    
    setTimeout(()=>{
      social[key]=false
      this.setState({social})
    }, 1000)
  }
  
  render(){
    
    return (
      <div className="App">
          <AppBar className="top-nav">
            <div className="top-nav-menu-icon">
              <Icon>
                <MenuIcon className="menu-icon"/>
              </Icon>
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
            <div className="text-content">
              <div id="company-name">Prism Concepts </div>
              <div id="company-motto">DESIGN | PLAN | BUILD</div>
              <div id="site-info">Website coming soon!</div>
            </div> 
           
            <div className="contacts">
              
                
                <Facebook 
                  id="facebook" 
                  className={clsx("social", {
                      "facebook": this.state.social.facebook
                  })} 
                  onClick={this.socialEffect} 
                />
                
                <WhatsApp 
                  id="whatsapp"  
                  onClick={this.socialEffect}
                  className={clsx("social", {
                    "whatsapp": this.state.social.whatsapp
                  })} 
                />

                <Twitter 
                  id="twitter"
                  onClick={this.socialEffect}
                  className={clsx("social", {
                        "twitter": this.state.social.twitter
                    })} 
                />
             
                <Instagram
                  id="instagram"  onClick={this.socialEffect}
                  className={clsx("social", {
                       "instagram": this.state.social.instagram
                  })} 
                />
             
                
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
