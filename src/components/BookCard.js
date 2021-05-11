import React from 'react'

const BookCard = ({book}) => {
    const info = book.volumeInfo
    const img = info.imageLinks ? info.imageLinks.thumbnail : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
    return (
        <div className='card'>
            <div className="card-body">
                <div className="card-front">
                    <img src={img} alt={info.title}/>
                    <div className="info">
                        <p><i>{info.title}</i></p>
                        <p><b>{info.authors ? `by ${info.authors.join(' & ')}` : null}</b></p>
                        <p>{info.categories ? `Genre: ${info.categories.join(', ')}` : null}</p>
                        <p>Page count: {info.pageCount}</p>
                        <p>{info.averageRating ? `Rating: ${info.averageRating}/5` : 'Rating: N/A'}</p>
                    </div>
                </div>
                <div className="card-back">
                    <p>{info.description ? info.description : 'No description available.'}</p>
                </div>
            </div>
        </div> 
    )
}
    


export default BookCard