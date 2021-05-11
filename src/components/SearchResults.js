import React from 'react'
import BookCard from './BookCard'

const SearchResults = ({books, currentUser}) => {
    const card = books ? books.map(book => {
        console.log(book)
        return <BookCard key={book.id} book={book} currentUser={currentUser}/>
    }) : null
    
    return(
        <div className='cards'>
            {card}
        </div>
    )
}

export default SearchResults