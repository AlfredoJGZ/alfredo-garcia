import React, { Component } from 'react'; 

class Header extends Component {
    render(){
        return(
            <div className='d-flex flex-column flex-md-row pt-4 justify-content-around justify-content-md-center align-items-center'>
                <div className='d-flex flex-column justify-content-around align-items-center mb-4 presentacion'>
                    <h2 className='fs-40 text-center fc-main-blue'>Alfredo García</h2>
                    <h1 className='fs-40 text-center fc-main-orange font-weight-bold'>Desarrollo Web</h1>
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
