import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import { Route, Link } from 'react-router-dom';



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
