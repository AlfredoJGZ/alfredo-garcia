import React , { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

class Location extends Component{
    render(){
        return(
        <div className='main-container location shadow px-2 py-4 fc-main-orange rounded mt-4 d-flex flex-column flex-md-row
             justify-content-center align-items-center justify-content-md-around'>
            <div className='fs-40 d-flex flex-column flex-md-row justify-content-center align-items-center text-center'>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className='mt-2 ml-md-4 my-md-0 pt-md-4'>Aragua, Venezuela</p>
            </div>
            <div className='fs-40 d-flex flex-column flex-md-row justify-content-center align-items-center text-center'>
                <FontAwesomeIcon icon={faLanguage} />
                <p className='mt-2 mb-0 ml-md-4 my-md-0 pt-md-4'>Español / Inglés</p>
            </div>
        </div>
        )
    }
}; 

export default Location; 
