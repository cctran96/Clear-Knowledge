import './App.css'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './containers/Navbar'
import Home from './containers/Home'
import AboutUs from './containers/AboutUs'
import Profile from './containers/Profile'
import Search from './containers/Search'

const usersURL = 'http://localhost:3001/users/'
const commentsURL = 'http://localhost:3001/comments'
const fetchData = url => fetch(url).then(r => r.json())
const postConfig = body => ({method: 'POST',headers: {'Content-Type': 'application/json','Accept': 'application/json'},body: JSON.stringify(body)})

class App extends React.Component {
  state={
    users: [],
    comments: [],
    favorites: [],
    currentUser: null,
    currentBook: null
  }

  componentDidMount(){
    fetchData(usersURL).then(users => this.setState({users: users.map(user => user.username)}))
    fetchData(commentsURL).then(comments => this.setState({comments}))
  }

  handleLogin = (e, u, p) => {
    e.preventDefault()
    fetchData(usersURL).then(data => {
        const passed = data.find(user => user.username === u && user.password === p)
        passed ? this.setState({currentUser: passed}) : alert("The information you have entered is incorrect.")
    })
  } 

  handleLogout = () => {
    this.setState({
      currentUser: ''
    })
  }

  handleNewComment = comment => {
    fetch(commentsURL, postConfig(comment)).then(r => r.json()).then(data => {
      this.setState({
        comments: [...this.state.comments, data]
      })
    })
  }

  createAccount = (e, u, p) => {
    e.preventDefault()
    this.state.users.includes(u) ? alert('There is already someone with that username!') 
    :fetch(usersURL, postConfig({username: u, password: p, name: "", location: "", bio: ""})).then(r => r.json()).then(data => {
      console.log(data)
      this.setState(
        {currentUser: data, 
          users: [...this.state.users, data.username]
        })
      })
  }

  viewBookDetails = book => {
    this.setState({currentBook: this.state.currentBook ? '' : book})
  }

  render(){
    return (
      <Router>
        <div className='container'>
            <Navbar />
            <Route exact path="/" component={() => <Home handleLogin={this.handleLogin} handleLogout={this.handleLogout} createAccount={this.createAccount} currentUser={this.state.currentUser}/>}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/search" render={() => <Search comments={this.state.comments} currentBook={this.state.currentBook} currentUser={this.state.currentUser} handleNewComment={this.handleNewComment}/>}/>
            <Route path="/profile" render={() => <Profile comments={this.state.comments} currentBook={this.state.currentBook} currentUser={this.state.currentUser} handleNewComment={this.handleNewComment}/>}/>
        </div>
      </Router>
    )
  }
}

export default App