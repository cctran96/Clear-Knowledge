import React from 'react'
import BookCard from './BookCard'

const SearchResults = ({books}) => {
    const card = books ? books.map(book => {
    return <BookCard key={book.key} book={book}/>
    }) : null
    
    return(
        <div className='cards'>
            {card}
        </div>
    )
}

export default SearchResults