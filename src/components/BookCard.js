import React from 'react'

const BookCard = ({book, currentUser, currentBook, viewBookDetails}) => {
    const info = book.volumeInfo
    const img = info.imageLinks ? info.imageLinks.thumbnail : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'

    return (
        <div className='card hover'>
            <div className="card-body">
                <img src={img} alt={info.title}/>
                <div className="card-info">
                    <p><i>{info.title}</i></p>
                    <p><b>{info.authors ? `by ${info.authors.join(' & ')}` : null}</b></p>
                    <p>Genre: {info.categories ?  info.categories.join(', ') : 'N/A'}</p>
                    <p>Page count: {info.pageCount ? info.pageCount : 'N/A'}</p>
                    <p>Rating: {info.averageRating ? `${info.averageRating}/5` : 'N/A'}</p>
                </div>
            </div>
            <div>
                <button onClick={() => viewBookDetails(book)}>{currentBook ? 'Return' : 'View description'}</button>
                <button>Add to my library</button>
            </div>
            {currentBook ? <div className='additional-info'>
                <h3>Description:</h3>
                <p>{info.description ? info.description : 'No description available.'}</p>
            </div> : null}
        </div> 
    )
}

export default BookCard