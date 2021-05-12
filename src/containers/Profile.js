import React, { Component } from 'react'
import BookCard from "../components/BookCard"

class Profile extends Component {

    filterBooks = (book) => {
        if(this.props.currentUser.username){
            if (book.currentUser.username === this.props.currentUser.username) {
                return <BookCard key={book.book.id} book={book.book} currentUser={this.props.currentUser} favoriteBook = {this.props.favoriteBook}/>
            }
        }
      }

    render(){
        const user = this.props.currentUser
        return(
            <div className='page-title'>
                {user ?
                <div>
                    <h2>My Library</h2>
                    <div className='profile-info'>
                        <h4>{user.name}</h4>
                        <p>@{user.username}</p>
                        <p>{user.location}</p>
                        <p>{user.bio}</p>
                        <button>Edit Profile</button>
                    </div>
                    {this.props.favorites.map(book => this.filterBooks(book))}
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