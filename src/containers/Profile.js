import React, { Component } from 'react'
import ProfileForm from '../components/ProfileForm'
import BookCard from "../components/BookCard"

const usersURL = 'http://localhost:3001/users/'

class Profile extends Component {

    state={
        edit: false,
        name: this.props.currentUser.name,
        location: this.props.currentUser.location,
        bio: this.props.currentUser.bio
    }

    handleEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitChanges = (e) => {
        e.preventDefault()
        const obj = {
            name: this.state.name,
            location: this.state.location,
            bio: this.state.bio
        }
        const config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(obj)
        }

        fetch(usersURL + this.props.currentUser.id, config)
        .then(this.setState({edit: !this.state.edit}))
    }

    render(){
        const user = this.props.currentUser
        const filteredBooks = this.props.favorites.filter(book => book.username === this.props.currentUser.username)
        return(
            <div className='page-title'>
                {user ?
                <div>
                    <h2>My Library</h2>
                    <div className='profile'>
                        {this.state.edit ? 
                        <ProfileForm  
                            handleChange={this.handleChange} 
                            submitChanges={this.submitChanges}
                            name={this.state.name}
                            location={this.state.location}
                            bio={this.state.bio}
                        /> :
                        <div className='profile-info'>
                            <h4>{this.state.name}</h4>
                            <p>@{user.username}</p>
                            <p>{this.state.location}</p>
                            <p>{this.state.bio}</p>
                        </div>}
                        {this.state.edit ? null : <button className='save-btn' onClick={this.handleEdit}>Edit Profile</button>}
                    </div>
                    <div className='card-container'>
                        {this.props.currentBook ? 
                            <BookCard 
                                book={this.props.currentBook} 
                                currentBook={this.props.currentBook} 
                                currentUser={this.props.currentUser}
                                viewBookDetails={this.props.viewBookDetails}
                                handleNewComment={this.props.handleNewComment}
                                comments = {this.props.comments}
                                favoriteBook = {this.props.favoriteBook}
                                favorites = {this.props.favorites}
                                removeComment = {this.props.removeComment}
                            />
                        : filteredBooks.map(book => 
                            <BookCard
                            key={book.book.id}
                            book={book.book} 
                            currentBook={this.props.currentBook} 
                            currentUser={this.props.currentUser}
                            viewBookDetails={this.props.viewBookDetails}
                            handleNewComment={this.props.handleNewComment}
                            comments = {this.props.comments}
                            favoriteBook = {this.props.favoriteBook}
                            favorites = {this.props.favorites}
                            removeComment = {this.props.removeComment}
                            />
                        )}
                    </div>
                </div> :
                <div>
                    <h2>Log in to access your profile</h2>
                </div>
                }
            </div>
        )
    }
}

export default Profile