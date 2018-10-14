import React from 'react';
import LeftCol from '../LeftColum/LeftCol';
import RightCol from '../RightColum/RightCol';
import classes from './homeBlog.css';

const HomeBlog = (props) => {
    return (
        <div className = {classes.mainTwoCal}>
        <LeftCol />
        <RightCol />
        </div>
        )
    }
    
export default HomeBlog;