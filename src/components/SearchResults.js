import React from 'react'
import BookCard from './BookCard'

const SearchResults = ({books, currentBook, currentUser, viewBookDetails, comments}) => {
    const card = books ? books.map(book => {
        return (
            <BookCard 
                key={book.id} 
                book={book} 
                currentBook={currentBook} 
                currentUser={currentUser}
                viewBookDetails={viewBookDetails}
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
            /> 
            : card}
        </div>
    )
}

export default SearchResults