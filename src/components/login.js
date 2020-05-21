import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <div style={{margin:'100px'}}>
                <input type="text" placeholder={"Enter your email"} /><br />
                <input type="password" placeholder={"Enter your Password"} /><br />
                <button>Login</button>
            </div>
        )
    }
}
