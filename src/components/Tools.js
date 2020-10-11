import React, { Component } from 'react';
import expoLogo from '../assets/images/expo-logo.svg';
import wpLogo from '../assets/images/wp-logo.svg';
import gatsbyLogo from '../assets/images/gatsby-logo.svg';
import xdLogo from '../assets/images/xd-logo.svg';


class Tools extends Component{
    render(){
        return(
            <div className='main-container bg-main-orange rounded rounded px-2 py-4 mt-4 mb-md-5 tools d-flex justify-content-around'>
                <img src={expoLogo} alt='logo expo'/>
                <img src={wpLogo} alt='logo wordpress'/>
                <img src={gatsbyLogo} alt='logo gatsby'/>
                <img src={xdLogo} alt='logo adobe xd'/>
            </div>
        );
    };
};

export default Tools; 