import React, { Component } from 'react'

class Home extends Component {
    state={
        username: '',
        password: '',
        remember: false,
        newUser: '',
        newPass: '',
        confirmPass: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = e => {
        const login = document.querySelector('.login')
        const create = document.querySelector('.create')
        const toggleBoth = () => {
            create.classList.toggle('show')
            login.classList.toggle('show')
        }
        create.className.includes('show') ? toggleBoth() : login.classList.toggle('show')
    }

    showAccount = () => {
        const login = document.querySelector('.login')
        const create = document.querySelector('.create')
        const toggleBoth = () => {
            create.classList.toggle('show')
            login.classList.toggle('show')
        }
        login.className.includes('show') ? toggleBoth() : create.classList.toggle('show')
    }

    clearInput = () => {
        this.props.handleLogout()
        this.setState({
            username: '',
            password: '',
            newUser: '',
            newPass: '',
            confirmPass: ''
        })
    }

    toggleRemember = () => {
        this.setState({
            remember: !this.state.remember
        })
    }

    render(){
        return(
            <div className='page-title home'>
                {this.props.currentUser ? 
                <div>
                    <p>You are signed in as <i>{this.props.currentUser.username}</i></p>
                    <button onClick={this.clearInput}>Logout</button>
                </div>
                :
                <div>
                    <button onClick={this.handleClick}>Login</button>
                    <button onClick={this.showAccount}>Create an account</button>
                    <div className='create'>
                        <h4>Glad that you're joining us!</h4>
                        <form onSubmit={e => this.props.createAccount(e, this.state.newUser, this.state.newPass, this.state.confirmPass)}>
                            <label>Enter a username:</label>
                            <input type="text" name="newUser" value={this.state.newUser} onChange={this.handleChange}/>
                            <label>Create your password:</label>
                            <input type="password" name="newPass" value={this.state.newPass} onChange={this.handleChange}/>
                            <input className='submit-btn' type='submit' />
                            <label>Confirm your password:</label>
                            <input type="password" name="confirmPass" value={this.state.confirmPass} onChange={this.handleChange}/>
                        </form>
                    </div>
                    <div className='login'>
                        <h4>Welcome back!</h4>
                        <form onSubmit={e => this.props.handleLogin(e, this.state.username, this.state.password, this.state.remember)}>
                            <label>Username: </label>
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                            <label>Password: </label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                            <label>Remember me</label>
                            <input type="checkbox" name="remember" onChange={this.toggleRemember}/>
                            <input className='submit-btn' type='submit' />
                        </form>
                    </div>
                </div>}
            </div>
        )
    }
}

export default Home