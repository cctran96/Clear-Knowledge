import React from 'react'
import BookCard from './BookCard'

const SearchResults = ({books, currentBook, currentUser, viewBookDetails, comments, handleNewComment, favoriteBook}) => {
    const card = books ? books.map(book => {
        return (
            <BookCard 
                key={book.id} 
                book={book} 
                currentBook={currentBook} 
                currentUser={currentUser}
                viewBookDetails={viewBookDetails}
                handleNewComment={handleNewComment}
                favoriteBook = {favoriteBook}
            />
        )
    }) : null
    
    return(
        <div className='card-container'>
            {currentBook ? 
            <BookCard 
                book={currentBook} 
                currentBook={currentBook} 
                currentUser={currentUser} 
                viewBookDetails={viewBookDetails}
                comments={comments}
                handleNewComment={handleNewComment}
                favoriteBook = {favoriteBook}
            /> 
            : card}
        </div>
    )
}

export default SearchResults