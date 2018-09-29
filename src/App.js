import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return ( 
            <div className = "App">
            <div className = "header" > 
            <h1> APP - Name </h1></div>
            <div className = "sub-header" >
            <p > App-links hear </p> </div>

            <div className = "main-two-cal" >
            <div className = "leftcolum" > < p > Content hear </p></div>
            <div className = "rightcolum" > < p > Content hear </p></div>
            </div>

            <div className = "appFooter" >
            <div className = "footer-left" >
            <img src = { logo } className = "App-logo"alt = "logo" />
            </div>  
            <div className = "footer-right" ><h1 > Brand-Name.com </h1> </div>  
            </div>   
            </div>
        );
    }
}
export default App;