import './App.css';
import HeaderImage from './images/portfolio-image.png';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact.js';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import { Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
          {/* <NavBar /> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/resume' component={Resume}/>
          <Route exact path='/contact-me' component={Contact}/>
          
          {/* <header className="App-header">
              <img src={HeaderImage} className="App-header-photo" />
              <p className="App-header-title">
                  Welcome to My Technical Portfolio
              </p>
          </header>
          <div className="About-section-paragraph">
              <p>
                  Hello, my name is Mirage Kamran. I am graduated from Lambda
                  School. I also earned my Asociates Degree in Computer Science
                  from Yuba College in California. The web applications and
                  programs that I have been using in a day to day life have
                  fascinated me by how much they are making life easier and the
                  curiosity of how they all are being created is what has
                  attracted me to take the new journey, and learn. Now I am
                  ready and excited to utilize the knowledge I have gained to
                  build applications and programs that can bring more value to
                  the world.
              </p>
          </div> */}
    </div>
  );
}

export default App;
