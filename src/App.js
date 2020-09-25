import React from 'react';
import './assets/css/App.css';
import './assets/css/bootstrap.min.css';
import Header from './components/Header'; 
import Location from './components/Location'; 

function App() {
  return (
    <div className="App">
      <header className="App-header main-container">
        <Header />
        <Location />
      </header>
    </div>
  );
}

export default App;
