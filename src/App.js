import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './containers/Navbar'
import Home from './containers/Home'
import AboutUs from './containers/AboutUs'
import Profile from './containers/Profile'
import Search from './containers/Search'

const usersURL = 'http://localhost:3001/users/'
const fetchUsers = () => fetch(usersURL).then(r => r.json())

class App extends React.Component {
  state={
    users: [],
    comments: [],
    favorites: [],
    currentUser: null,
    currentBook: null
  }

  componentDidMount(){
    fetchUsers().then(users => this.setState({users: users.map(user => user.username)}))
  }

  handleLogin = (e, u, p) => {
    e.preventDefault()
    fetchUsers().then(data => {
        const passed = data.find(user => user.username === u && user.password === p)
        passed ? this.setState({currentUser: u, username: '', password: ''}) : alert("The information you have entered is incorrect.")
    })
  } 

  handleLogout = () => {
    this.setState({
      currentUser: ''
    })
  }

  createAccount = (e, u, p) => {
    e.preventDefault()
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({username: u, password: p})
    }
    this.state.users.includes(u) ? alert('There is already someone with that username!') 
    :fetch(usersURL, config).then(r => r.json()).then(data => {
      this.setState(
        {currentUser: data.username, 
          users: [...this.state.users, data.username]
        })
      })
  }

  viewBookDetails = book => {
    this.setState({currentBook: this.state.currentBook ? null : book})
  }

  render(){
    return (
      <Router>
        <div className='container'>
            <Navbar />
            <Route exact path="/" component={() => <Home handleLogin={this.handleLogin} handleLogout={this.handleLogout} createAccount={this.createAccount} currentUser={this.state.currentUser}/>}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/search" component={() => <Search viewBookDetails={this.viewBookDetails} currentUser={this.state.currentUser} currentBook={this.state.currentBook}/>}/>
            <Route path="/profile" component={() => <Profile viewBookDetails={this.viewBookDetails} currentUser={this.state.currentUser}/>}/>
        </div>
      </Router>
    )
  }
}

export default App