import React from 'react'
import BookCard from './BookCard'

const SearchResults = ({books}) => {
    const card = books ? books.map(book => 
        {
        return (
            <div>
                <BookCard book = {book}/>
            </div>
        )
    }) : null
    return(
        <div className='cards'>
            {card}
        </div>
    )
}

export default SearchResults