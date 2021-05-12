import React, { Component } from 'react'

class SearchForm extends Component {
    state={
        input: ''
    }

    submitComment = e => {
        e.preventDefault()
        this.props.handleNewComment({bookId: this.props.bookId, username: this.props.currentUser.username, comment: this.state.input})
        this.setState({
            input: ''
        })
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={e => this.submitComment(e)}>
                <input onChange={e => this.handleChange(e)} type='text' value={this.state.input} placeholder='Add a new comment...'/>
                <input type='submit' value='submit'/>
            </form>
        )
    }
}

export default SearchForm