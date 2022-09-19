import React from 'react'

import Navbar from './features/Navbar';
import GlobalStyle from './features/GlobalStyle';
import Container from './features/Container';
import Home from './features/Home';
import Login from './features/Login';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Container>
                <Home />
                <Login />
            </Container>
        </>
    )
}

export default App;