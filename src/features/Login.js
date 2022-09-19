import React from 'react'
import styled from 'styled-components';

function Login({ className }) {
    const logo = require('../assets/logo.png');
    return (
        <div className={className}>
            <div class="LoginPage">
                <div class="row">
                    <img src={logo} alt="E-Manga" class="logo rounded"></img>
                </div>
                <div class="row">
                    <form class="loginForm">
                        <span>User ID</span>
                        <input type="text" class="username" placeholder='username'></input>
                        <span>Password</span>
                        <input type="password" class="password" placeholder='password'></input>
                        <div class="col nevigateButton">
                            <button class="loginButton">Login</button>
                            <button class="registerButton">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default styled(Login)`
    span{
        color: #ffffff;
    }
    .nevigateButton{
        display: flex;
        justify-content: start;
        margin-top: 1rem;
    }
    .loginButton{
        margin-right: 1rem;
        background-color: #E30C0C;
    }
    .registerButton{
        background-color: #D9D9D9;
        color: #000000;
    }
    .LoginPage{
        position:relative;
        top: 15%;
    }
    .row{
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }
    .username,.password{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .logo{
        width:90%;
        background-color: #ffffff;
        padding: 10px;
    }
    .loginForm{
        padding:1rem;
    }
`