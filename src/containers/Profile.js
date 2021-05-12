import React, { Component } from 'react'

class Profile extends Component {
    render(){
        const user = this.props.currentUser
        return(
            <div className='page-title'>
                {user ?
                <div>
                    <h2>My Library</h2>
                    <div className='profile-info'>
                        <h4>{user.name}</h4>
                        <p>@{user.username}</p>
                        <p>{user.location}</p>
                        <p>{user.bio}</p>
                        <button>Edit Profile</button>
                    </div>
                </div> :
                <div>
                    <h2>Log in to access your profile</h2>
                </div>
                }
            </div>
        )
    }
}

export default Profile