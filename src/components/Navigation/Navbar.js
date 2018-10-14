import React, {Component} from 'react';
import classes from './navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render () {
        return (
            
            <div className = {classes.subheader}>
            <ul className= {classes.navigation}>
             <li><Link to="/Contact">Contact</Link></li>
             <li><Link to="/About">About</Link></li>
             <li><Link to="/Products">Products</Link></li>
             <li><Link to="/">Home</Link></li>
            </ul> 
            </div>
            
        );
    }
}


export default Navbar;