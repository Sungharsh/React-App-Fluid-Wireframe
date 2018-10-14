import React from 'react';
import classes from './footer.css';
import logo from '../../assets/logo.svg';


const Footer = ( props ) => {
    return (

<div className = {classes.appFooter}>
<div className = {classes.footerLeft}>
<img src = { logo } className = {classes.AppLogo} alt = "logo" />
</div>  
<div className = {classes.footerRight} ><h1 > Brand-Name.com </h1> </div>
</div> 
    )
    
    }



export default Footer;