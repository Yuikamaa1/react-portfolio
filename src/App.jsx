// import logo from './logo.svg';
import './App.css';
import './index.css'
import React  from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import Skill from './components/Skill';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Home } from './components/Home';

// const Body = styled.div`
//     bg`
const  App=()=> {
  return (
    <div className="App">
    <Router>
      <div>
        <Navbar/>
        <Routes>
        <Route path='/' Component={Home} />
          <Route path='/contact' Component={Contact} />
          <Route path='/skill' Component={Skill} />
          <Route path='/project' Component={Project} />


        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
