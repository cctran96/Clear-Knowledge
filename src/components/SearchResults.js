import React from 'react'

const SearchResults = ({books}) => {
    const card = books ? books.map(book => {
        const img = book.cover_i ?
        `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` :
        'https://image.shutterstock.com/image-vector/no-user-profile-picture-hand-260nw-99335579.jpg'
        return (
            <div key={book.key} className='card'>
                <div className="card-body">
                    <div className="card-front">
                        <img src={img} alt={book.title}/>
                        <div className="info">
                            <p><i>{book.title}</i></p>
                            <p><b>by {book.author_name}</b></p>
                        </div>
                    </div>
                    <div className="card-back">
                        <p>Some info here</p>
                    </div>
                </div>
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