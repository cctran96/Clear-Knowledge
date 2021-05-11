import React from 'react'

const BookCard = ({book, currentUser, currentBook, viewBookDetails, comments}) => {
    const info = book.volumeInfo
    const img = info.imageLinks ? info.imageLinks.thumbnail : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
    const bookComments = comments ? comments.filter(comment => comment.bookId === book.id) : null
    const profilePic = 'https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-14.jpg'
    console.log(bookComments)
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
                <h3>Comments:</h3>
                {bookComments.length === 0 ? <p>No comments yet...</p> :
                <ul className='comments'>
                    {bookComments.map(comment => {
                        return(
                            <li key={comment.id}>
                                <img src={profilePic} alt={`${comment.username}'s profile`}/>
                                <p><b>{comment.username}</b><br/>{comment.comment}</p>
                            </li>
                        )
                    })}
                </ul>}
            </div> : null}
        </div> 
    )
}

export default BookCard