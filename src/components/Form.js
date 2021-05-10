import React from 'react'

const Form = ({input, handleInput, fetchResults}) => {
    return (
        <form onSubmit={fetchResults}>
            <input className="search" type="text" value={input} placeholder="Enter a title" onChange={handleInput}/>
        </form>
    )
}

export default Form