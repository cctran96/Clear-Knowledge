import React, { Component } from 'react'

class Home extends Component {
    state={
        username: '',
        password: '',
        newUser: '',
        newPass: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = e => {
        const login = e.target.parentNode.lastChild
        login.classList.toggle('show')
    }

    showAccount = () => {
        const form = document.querySelector('.create')
        form.classList.toggle('show')
    }

    newInfo = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <div className='page-title'>
                {this.props.currentUser ? 
                <div>
                    <p>You are signed in as <i>{this.props.currentUser}</i></p>
                    <button onClick={this.props.handleLogout}>Logout</button>
                </div>
                :
                <div>
                    <button onClick={this.handleClick}>Login</button>
                    <button onClick={this.showAccount}>Create an account</button>
                    <div className='create'>
                        <form onSubmit={e => this.props.createAccount(e, this.state.newUser, this.state.newPass)}>
                            <label>Enter a username: </label>
                            <input type="text" name="newUser" value={this.state.newUser} onChange={this.newInfo}/>
                            <label>Create your password: </label>
                            <input type="password" name="newPass" value={this.state.newPass} onChange={this.newInfo}/>
                            <input className='submit-btn' type='submit' />
                        </form>
                    </div>
                    <div className='login'>
                        <form onSubmit={e => this.props.handleLogin(e, this.state.username, this.state.password)}>
                            <label>Username: </label>
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                            <label>Password: </label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                            <input className='submit-btn' type='submit' />
                        </form>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Home