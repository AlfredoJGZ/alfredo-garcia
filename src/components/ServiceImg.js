import React , { Component } from 'react'; 
import { Fade } from 'react-bootstrap';

class ServiceImg extends Component{

    state = {
        fade: false,
        position: this.props.position, 
        className: 'service-img'
    }
     
    componentDidMount(){    
        if(this.state.position === 'right'){
            this.setState({
                className: 'service-img ml-md-2'
            })
        }else{
            this.setState({
                className: 'service-img mr-md-2'
            }) 
        }
        setTimeout(()=>{
            this.setState({fade:true})
        },500)    
    }

    render(){
        return(
            <Fade in={this.state.fade}>
                <div className={this.state.className} id={this.props.id}>

                </div>
            </Fade>
        )
    }
}

export default ServiceImg