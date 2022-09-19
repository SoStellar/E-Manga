import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Navbar({ className }) {
  const logo = require('../assets/logo.png');
  return (
    <header className={className}>
      <div class="options">
        <img src={logo} alt="E-Manga"></img>
        <a href="./Home.js">Home</a>
        <a href="./Manga.js">Manga</a>
        <a href="/Favorite.js">Favorite</a>
      </div>
      <div class="options2">
        <a href="/"><i class="bi bi-bag"></i> Cart</a>
        <div>
          <a href="./Login.js">Login</a>
          <a href="/"> / Register</a>
        </div>
      </div>
    </header >
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Navbar)`
  height: 48px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #F5F5F5;
  // border-bottom: 1px solid #dee2e6;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  padding: 2rem;
  position: fixed;
  z-index: 100;

  a{
    color: #AB987A;
  }
  a:hover{
    color: #FF3B3F;
  }
  img{
    width: 30%;
  }
  .options{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .options2{
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;