import React, { Component } from 'react'; 

class Services extends Component{

    state = {
        title:'' 
    }
    
    componentDidMount(){
        if(this.props.title === 'frontend'){
            this.setState({
                title: 'Desarrollo Front-End'
            })
        }
        if(this.props.title === 'backend'){
            this.setState({
                title: 'Desarrollo Back-End'
            })
        }
        if(this.props.title === 'mobile'){
            this.setState({
                title: 'Desarrollo Mobile'
            })
        }
    }

    render(){
        return(
            <>
                <h2 className='rounded px-1 py-2 mb-4 text-center'>{this.state.title}</h2>
                <p className='fc-main-blue text-center'>Creación de sitios y aplicaciones web desde 0 utilizando 
                    el poder semántico de HTML5 y los estilos y animaciones de CSS3. 
                    Además de experiencia con distintos frameworks de desarrollo como React, Angular y Vue.
                </p>
            </>
        );
    }
}

export default Services; 