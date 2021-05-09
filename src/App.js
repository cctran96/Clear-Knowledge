import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Profile from './components/Profile'
import Search from './components/Search'

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className='container'>
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="search" component={Search}/>
            <Route path="/profile" component={Profile}/>
        </div>
      </Router>
    )
  }
}

export default App