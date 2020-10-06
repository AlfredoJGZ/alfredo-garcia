import React, { Component } from 'react'; 

class Services extends Component{

    state = {
        desc:''
    }

    frontDesc = 'Creación de sitios y aplicaciones web desde 0 utilizando el poder '+
        'semántico de HTML5 y los estilos y animaciones de CSS3. Además de experiencia con '+
        'distintos frameworks de desarrollo como React, Angular y Vue.'
    
    backDesc = 'Creación de API REST con Node.js, manejo de bases de datos con MySQL '+
        'o MongoDB, interfaces de manejo de data amigable para el usuario utilizando la '+
        'técnica de headless CMS.'

    mobileDesc = 'Desarrollo de aplicaciones móviles multiplataforma (Android / iOS) '+
        'utilizando React Native, Redux y los más actualizados estándares de performance. '

    componentDidMount(){
        if(this.props.title === 'frontend'){
            this.setState({
                desc: this.frontDesc
            })
        }
        if(this.props.title === 'backend'){
            this.setState({
                desc: this.backDesc
            })
        }
        if(this.props.title === 'mobile'){
            this.setState({
                desc: this.mobileDesc
            })
        }
    }

    render(){
        return(
                   
            <p className='fc-main-blue text-center mr-md-2 d-md-flex align-items-center'>{
                this.state.desc
                }
            </p>
            
        );
    }
}

export default Services; 