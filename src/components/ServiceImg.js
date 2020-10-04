import React , { Component } from 'react'; 
import { Fade } from 'react-bootstrap';

class ServiceImg extends Component{

    state = {
        fade: false
    }
     
    componentDidMount(){    
        setTimeout(()=>{
            this.setState({fade:true})
        },500)    
    }

    render(){
        return(
            <Fade in={this.state.fade}>
                <div className='service-img' id={this.props.id}>

                </div>
            </Fade>
        )
    }
}

export default ServiceImg