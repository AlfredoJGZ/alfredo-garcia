import React, { Component } from 'react'; 

class Contact extends Component{

    state = {
        email : 'Correo Electrónico',
        message: 'Escribe tu mensaje'
    }

    handleChange(event) {
        let value = event.target.value
        let name = event.target.name
        this.setState(prevState => ({
            ...prevState,
                [name]: value
        }));
      }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.email);
        event.preventDefault();
    }

    render(){
        return(
            <div className='d-flex flex-column align-items-center justify-content-around'>
                <h2 className='rounded bg-main-orange px-1 px-md-3 py-2 mb-4 mb-md-2 text-center d-inline-block sub-header'>Contacto</h2>       
                <form className='rounded shadow px-4 py-4' onSubmit={this.handleSubmit.bind(this)}>
                    <label className='d-block fc-main-orange' htmlFor='email'>
                        E-mail:
                    </label>
                    <input className='rounded border w-100 px-1 py-2 fc-main-blue mb-4' name='email' type="email" value={this.state.email} id='email' onChange={this.handleChange.bind(this)} required/>

                    <label className='d-block fc-main-orange'>
                        Mensaje:
                    </label>
                    <textarea className='d-block rounded border w-100 px-1 py-2 fc-main-blue mb-4' name='message' value={this.state.message} onChange={this.handleChange.bind(this)} required />
                    <input className='rounded border-0 bg-main-orange d-block py-2' type="submit" value="Enviar" />
                </form>
            </div>
        )
    }
}

export default Contact; 