import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'

const url = 'https://www.googleapis.com/books/v1/volumes?q='

class Search extends Component {
    state={
        searchInput: '',
        books: []
    }

    handleInput = e => {
        this.setState({
            searchInput: e.target.value
        })
    }

    fetchResults = e => {
        e.preventDefault()
        fetch(url + this.state.searchInput).then(r => r.json()).then(books => {
            this.props.updateDisplayedBooks(books)
            this.setState({
                searchInput: ''
            })
        })
    }

    render(){
        return(
            <div className='page-title'>
                <h2>Search for a book</h2>
                <SearchForm 
                    input={this.state.searchInput} 
                    handleInput={this.handleInput} 
                    fetchResults={this.fetchResults}
                />
                <SearchResults 
                    books={this.props.books.items} 
                    currentUser={this.props.currentUser} 
                    currentBook={this.props.currentBook}
                    viewBookDetails={this.props.viewBookDetails}
                    returnToSearch={this.returnToSearch}
                    comments={this.props.comments}
                    handleNewComment={this.props.handleNewComment}
                    favoriteBook = {this.props.favoriteBook}
                    favorites = {this.props.favorites}
                    removeComment = {this.props.removeComment}
                />
            </div>
        )
    }
}

export default Search