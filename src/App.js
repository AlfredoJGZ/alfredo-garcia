import React, { Component } from 'react';
import './assets/css/App.css';
import './assets/css/bootstrap.min.css';
import Header from './components/Header'; 
import Location from './components/Location'; 
import Services from './components/Services'; 
import ServiceImg from './components/ServiceImg';

class App extends Component{

  state = {
    fadeOne: false,
    fadeTwo: false,
    fadeThree: false 
  }
 

  handleScroll(){
   console.log('you are scrolling')
  }

  componentDidMount() {
    let viewportHeight = window.innerHeight; 
    let fades = document.querySelectorAll('.service-img');
    let firstFade = fades[0].getBoundingClientRect()
    let secondFade = fades[1].getBoundingClientRect()
    let thirdFade = fades[2].getBoundingClientRect()

    window.addEventListener('scroll', ()=>{
      if(firstFade.top - viewportHeight <= window.scrollY){
        this.setState({fadeOne: true})
      }
      if(secondFade.top - viewportHeight <= window.scrollY){
        this.setState({fadeTwo: true})
      }
      if(thirdFade.top - viewportHeight <= window.scrollY){
        this.setState({fadeThree: true})
      }
    }, { passive: true })
  }

  render(){
    return (
      <div className="App">
        
        <header className="App-header main-container">
          <Header />
          <Location />
        </header>
        <main>
        {/* Servicio de desarrollo front-end*/}
          <section className='mt-4 main-container service d-flex flex-column align-items-center'>
            <h2 className='rounded px-1 px-md-3 py-2 mb-4 mb-md-5 text-center'>Desarrollo Front-End</h2>
            <div className='d-md-flex'>
              <Services title='frontend'/>
              {this.state.fadeOne === true ?
              <ServiceImg id='fade-01' position='right'/> : 
              <div className='service-img'>
              </div> }
            </div>
          </section>
        {/*Servicio de desarrollo backend*/}
          <section className='mt-4 main-container service d-flex flex-column align-items-center'>
            <h2 className='rounded px-1 px-md-3 py-2 mb-4 mb-md-5 text-center'>Desarrollo Back-End</h2>
            <Services title='backend'/>
            {this.state.fadeTwo === true ?
            <ServiceImg id='fade-02' position='left'/> : 
            <div className='service-img'>
            </div> }
          </section>
        {/*Servicio de desarrollo mobile app*/}
          <section className='mt-4 main-container service d-flex flex-column align-items-center'>
            <h2 className='rounded px-1 px-md-3 py-2 mb-4 mb-md-5 text-center'>Desarrollo Mobile</h2>
              <Services title='mobile'/>
              {this.state.fadeThree === true ?
              <ServiceImg id='fade-03' position='right'/> : 
              <div className='service-img'>
              </div> }
          </section>
        </main>
      </div>
    );
  }
}

export default App;


  


