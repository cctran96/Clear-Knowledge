import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Favorites from './components/Favorites'

class App extends React.Component {
  render(){
    return (
      <Router>
        <div id='layout'>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/favorites" component={Favorites}/>
        </div>
      </Router>
    )
  }
}

export default App
