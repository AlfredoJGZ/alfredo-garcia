import React, { Component } from 'react'; 

class Header extends Component {
    render(){
        return(
            <div className='d-flex pt-4 justify-content-around'>
                <div className='d-flex flex-column justify-content-around align-items-center'>
                    <h2 className='fs-40 text-center fc-main-blue'>Alfredo García</h2>
                    <h1 className='fs-80 text-center fc-main-orange'>Desarrollo Web</h1>
                    <button className='rounded blue-btn' title='Contacto'>
                        Contacto
                    </button>
                </div>
                <div className='hero-img'>
                
                </div>
            </div>

        )
    }
};

export default Header; 
