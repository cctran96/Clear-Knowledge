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
            this.setState({
                books,
                previousSearch: this.state.searchInput,
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
                    books={this.state.books.items} 
                    currentUser={this.props.currentUser} 
                    currentBook={this.props.currentBook}
                    viewBookDetails={this.props.viewBookDetails}
                    returnToSearch={this.returnToSearch}
                    comments={this.props.comments}
                    handleNewComment={this.props.handleNewComment}
                />
            </div>
        )
    }
}

export default Search