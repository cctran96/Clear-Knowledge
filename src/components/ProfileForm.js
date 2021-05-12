import React from 'react'

const ProfileForm = ({name, location, bio, submitChanges, handleChange}) => {
    return (
        <form className='profile' onSubmit={e => submitChanges(e)}>
            <label>Name: </label>
            <input onChange={e => handleChange(e)} type='text' name='name' value={name}/>
            <label>Location: </label>
            <input onChange={e => handleChange(e)} type='text' name='location' value={location}/>
            <label>Bio: </label>
            <textarea onChange={e => handleChange(e)} type='text' name='bio' value={bio} className='bio'/>
            <input type='submit' value='save changes'/>
        </form>
    )
}

export default ProfileForm