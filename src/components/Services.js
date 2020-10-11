import React, { Component } from 'react'; 

class Services extends Component{

    state = {
        title:'',
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
                title: 'Desarrollo Front-End',
                desc: this.frontDesc
            })
        }
        if(this.props.title === 'backend'){
            this.setState({
                title: 'Desarrollo Back-End',
                desc: this.backDesc
            })
        }
        if(this.props.title === 'mobile'){
            this.setState({
                title: 'Desarrollo Móvil',
                desc: this.mobileDesc
            })
        }
    }

    render(){
        return(
            <div className='d-flex flex-column align-items-center justify-content-around service-desc'>
                <h2 className='rounded px-1 px-md-3 py-2 mb-4 mb-md-2 text-center d-inline-block sub-header'>{this.state.title}</h2>       
                <p className='fc-main-blue text-center mb-0 d-md-flex align-items-center'>{
                    this.state.desc
                    }
                </p>
            </div>
        );
    }
}

export default Services; 