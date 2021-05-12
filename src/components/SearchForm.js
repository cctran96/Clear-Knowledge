import React from 'react'

const SearchForm = ({input, handleInput, fetchResults}) => {
    return (
        <form onSubmit={fetchResults}>
            <input className="search" type="text" value={input} placeholder="Enter a title" onChange={handleInput}/>
        </form>
    )
}

export default SearchForm