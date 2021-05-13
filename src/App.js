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
const favoritesURL = 'http://localhost:3001/favorites'
const rememberedURL = 'http://localhost:3001/rememberedUser/1'
const fetchData = url => fetch(url).then(r => r.json())
const postConfig = body => ({method: 'POST',headers: {'Content-Type': 'application/json','Accept': 'application/json'},body: JSON.stringify(body)})
const patchConfig = body => ({method: 'PATCH',headers: {'Content-Type': 'application/json','Accept': 'application/json'},body: JSON.stringify(body)})

class App extends React.Component {
  state={
    users: [],
    comments: [],
    favorites: [],
    books: [],
    currentUser: '',
    currentBook: null
  }

  componentDidMount(){
    fetchData(usersURL).then(users => {
      fetchData(rememberedURL).then(u => {
        const remembered = users.find(user => user.username === u.username)
        this.setState({
          currentUser: remembered ? remembered : '',
          users: users.map(user => user.username)
        })
      })
    })
    fetchData(commentsURL).then(comments => this.setState({comments}))
    fetchData(favoritesURL).then(favorites => this.setState({favorites}))
  }

  handleLogin = (e, user, pass, remember) => {
    e.preventDefault()
    fetchData(usersURL).then(data => {
      const signIn = () => {
        remember ? fetch(rememberedURL, patchConfig({username: user})) : console.log('Not remembering')
        this.setState({currentUser: passed})
      }
      const passed = data.find(loggedUser => loggedUser.username === user && loggedUser.password === pass)
      passed ? signIn() : alert("The information you have entered is incorrect.")
    })
  } 

  handleLogout = () => {
    fetch(rememberedURL, patchConfig({username: ''})).then(this.setState({currentUser: ''}))
  }

  handleNewComment = comment => {
    fetch(commentsURL, postConfig(comment)).then(r => r.json()).then(data => {
      this.setState({
        comments: [...this.state.comments, data]
      })
    })
  }

  createAccount = (e, user, pass, confirmPass) => {
    e.preventDefault()
    const checkPass = () => {
      this.state.users.includes(user) ? alert('There is already someone with that username!') : 
      fetch(usersURL, postConfig({username: user, password: pass, name: '', location: '', bio: ''}))
      .then(r => r.json())
      .then(data => {
        this.setState(
          {currentUser: data, 
            users: [...this.state.users, data.username]
          })
        })
    }
    pass !== confirmPass ? alert('The password you have typed does not match!') : checkPass()
  }

  viewBookDetails = book => {
    this.setState({currentBook: this.state.currentBook ? '' : book})
  }

  updateDisplayedBooks = bookData => {
    this.setState({books: bookData})
  }

  isAlreadyFavoriteCheck = (book, currentUser) => {
    if(currentUser === null )
    return false

      let result = false
        this.state.favorites.forEach(favBook => { 
        if (favBook.book.id === book.id && favBook.currentUser.username === currentUser.username) {
          result = true
        }
      })
      return result
  }

  removeComment = (e) => {
    //removing comment
    const deleteConfig = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    console.log(e)
    fetch(`http://localhost:3001/comments/${e}`, deleteConfig)
    this.setState({comments: this.state.comments.filter((comment)=> comment.id !== parseInt(e))})
  }

  favoriteBook = (book, currentUser) => {
    if (this.isAlreadyFavoriteCheck(book, currentUser)){
      const deleteConfig = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      let bookId = ''
      this.state.favorites.forEach(favBook => {
        if (favBook.book.id === book.id && favBook.currentUser.username === currentUser.username){
          bookId = favBook.id
        }
      })
      fetch(`http://localhost:3001/favorites/${bookId}`, deleteConfig)
      this.setState({favorites: this.state.favorites.splice(bookId)})
      
    } else {
      const addedBook = {
          book: book,
          currentUser: currentUser
      }
  
      if(currentUser !== null){
        fetch('http://localhost:3001/favorites', postConfig(addedBook))
        .then(res => res.json())
        .then(data => {this.setState({favorites: [...this.state.favorites, data]})})
      }
    }
}

  render(){
    return (
      <Router>
        <div className='container'>
            <Navbar />
            <Route exact path="/" render={() => <Home 
              handleLogin={this.handleLogin} 
              handleLogout={this.handleLogout} 
              createAccount={this.createAccount} 
              currentUser={this.state.currentUser}/>}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/search" render={() => <Search  
              comments={this.state.comments} 
              books={this.state.books}
              currentBook={this.state.currentBook} 
              currentUser={this.state.currentUser} 
              favorites = {this.state.favorites}
              handleNewComment={this.handleNewComment}
              favoriteBook = {this.favoriteBook}
              isAlreadyFavoriteCheck = {this.isAlreadyFavoriteCheck}
              viewBookDetails={this.viewBookDetails}
              updateDisplayedBooks={this.updateDisplayedBooks}
              removeComment = {this.removeComment}
              />}/>
            <Route path="/profile" render={() => <Profile 
              comments={this.state.comments} 
              currentBook={this.state.currentBook} 
              currentUser={this.state.currentUser} 
              favorites = {this.state.favorites}
              handleNewComment={this.handleNewComment}
              favoriteBook = {this.favoriteBook}
              isAlreadyFavoriteCheck = {this.isAlreadyFavoriteCheck}
              viewBookDetails={this.viewBookDetails}
              removeComment = {this.removeComment}
              />}/>
        </div>
      </Router>
    )
  }
}

export default App