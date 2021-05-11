import React, { Component } from 'react'
import Form from '../components/Form'
import SearchResults from '../components/SearchResults'

const url = 'https://www.googleapis.com/books/v1/volumes?q='

class Search extends Component {
    state={
        searchInput: '',
        books: [],
        currentBook: null
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

    viewBookDetails = book => {
        this.setState({currentBook: this.state.currentBook ? '' : book})
      }

    render(){
        return(
            <div className='page-title'>
                <h2>Search for a book</h2>
                <Form 
                    input={this.state.searchInput} 
                    handleInput={this.handleInput} 
                    fetchResults={this.fetchResults}
                />
                <SearchResults 
                    books={this.state.books.items} 
                    currentUser={this.props.currentUser} 
                    currentBook={this.state.currentBook}
                    viewBookDetails={this.viewBookDetails}
                    returnToSearch={this.returnToSearch}
                    comments={this.props.comments}
                />
            </div>
        )
    }
}

export default Search