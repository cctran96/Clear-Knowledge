import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './containers/Navbar'
import Home from './containers/Home'
import AboutUs from './containers/AboutUs'
import Profile from './containers/Profile'
import Search from './containers/Search'

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className='container'>
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/search" component={Search}/>
            <Route path="/profile" component={Profile}/>
        </div>
      </Router>
    )
  }
}

export default App