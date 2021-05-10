import React, { Component } from 'react'
import Form from '../components/Form'
import SearchResults from '../components/SearchResults'

const url = 'http://openlibrary.org/search.json?title='

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
                searchInput: ''
            })
        })
    }

    render(){
        return(
            <div className='page-title'>
                <h2>Search for a book</h2>
                <Form input={this.state.searchInput} handleInput={this.handleInput} fetchResults={this.fetchResults}/>
                <SearchResults books={this.state.books.docs}/>
            </div>
        )
    }
}

export default Search