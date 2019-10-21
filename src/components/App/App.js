import React from 'react';
import './App.css';
import Header from '../Header';
import Navigation from '../Navigation';
import {Route} from 'react-router-dom';
import Lab1Container from '../Lab1/Lab1Container';
import Lab2Container from '../Lab2/Lab2Container';

function App() {
  return (
    <div>
      <Header />
      <div className="section">
        <div className="nav">
          <Navigation />
        </div>
        <div className="content">
          <Route path="/lab1" component={Lab1Container} />
          <Route path="/lab2" component={Lab2Container} />
        </div>
      </div>
    </div>
  );
}

export default App;