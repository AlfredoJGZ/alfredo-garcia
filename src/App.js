import React, { Component } from 'react';
import './assets/css/App.css';
import './assets/css/bootstrap.min.css';
import Header from './components/Header'; 
import Location from './components/Location'; 
import Services from './components/Services'; 
import ServiceImg from './components/ServiceImg';
import Tools from './components/Tools';
import Contact from './components/Contact';

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
          <section className='mt-4 mt-md-5 main-container service d-flex flex-column align-items-center'>
            <div className='d-md-flex w-100'>
              <Services title='frontend'/>
              {this.state.fadeOne === true ?
              <ServiceImg id='fade-01' /> : 
              <div className='service-img'>
              </div> }
            </div>
          </section>
        {/*Servicio de desarrollo backend*/}
          <section className='mt-4 mt-md-5 main-container service d-flex flex-column align-items-center'>
            <div className='d-md-flex flex-row-reverse'>
              <Services title='backend'/>
              {this.state.fadeTwo === true ?
              <ServiceImg id='fade-02' /> : 
              <div className='service-img'>
              </div> }
            </div> 
          </section>
        {/*Servicio de desarrollo mobile app*/}
          <section className='mt-4 mt-md-5 main-container service d-flex flex-column align-items-center'>
            <div className='d-md-flex'>
              <Services title='mobile'/>
              {this.state.fadeThree === true ?
              <ServiceImg id='fade-03' /> : 
              <div className='service-img'>
              </div> }
            </div>
          </section>
        </main>
        <section className='mt-4 mb-md-5'>
          <Tools />
        </section>
        <section className='mt-4 pb-4'>
          <Contact />
        </section>
      </div>
    );
  }
}

export default App;


  


