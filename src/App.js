import './App.css';
import Navbar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import { Route } from 'react-router-dom';
import React from 'react';



export default function App() {
  return (
      <div className="App">
        <Navbar />     
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/resume' component={Resume}/>
        <Route path='/contact-me' component={Contact}/>
    </div>
  );
}
