import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Home({ className }) {
    const slideImages1 = require('../assets/slide1.jpg');
    const slideImages2 = require('../assets/slide2.jpg');
    const slideImages3 = require('../assets/slide3.jpg');
    return (
        <div className={className}>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slideImages1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={slideImages2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={slideImages3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="topManga">
                <h1>Top Manga</h1>
                <div class="row">
                    <div class="col-md-2">
                        <div class="manga-box position-relative">
                            <div class="card">
                                <img src="https://img.freepik.com/free-vector/smiling-girl-anime-character-poster_603843-3026.jpg?w=360" class="card-img-top" alt="..." />
                                <div class="card-button">
                                    <div><button type="button" class="favorite-button rounded"><i class="bi bi-heart"></i></button></div>
                                    <div><button type="button" class="cart-button rounded"><i class="bi bi bi-bag-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <div class="manga-box position-relative">
                            <div class="card">
                                <img src="https://img.freepik.com/free-vector/smiling-girl-anime-character-poster_603843-3026.jpg?w=360" class="card-img-top" alt="..." />
                                <div class="card-button">
                                    <div><button type="button" class="favorite-button rounded"><i class="bi bi-heart"></i></button></div>
                                    <div><button type="button" class="cart-button rounded"><i class="bi bi bi-bag-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <div class="manga-box position-relative">
                            <div class="card">
                                <img src="https://img.freepik.com/free-vector/smiling-girl-anime-character-poster_603843-3026.jpg?w=360" class="card-img-top" alt="..." />
                                <div class="card-button">
                                    <div><button type="button" class="favorite-button rounded"><i class="bi bi-heart"></i></button></div>
                                    <div><button type="button" class="cart-button rounded"><i class="bi bi bi-bag-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <div class="manga-box position-relative">
                            <div class="card">
                                <img src="https://img.freepik.com/free-vector/smiling-girl-anime-character-poster_603843-3026.jpg?w=360" class="card-img-top" alt="..." />
                                <div class="card-button">
                                    <div><button type="button" class="favorite-button rounded"><i class="bi bi-heart"></i></button></div>
                                    <div><button type="button" class="cart-button rounded"><i class="bi bi bi-bag-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <div class="manga-box position-relative">
                            <div class="card">
                                <img src="https://img.freepik.com/free-vector/smiling-girl-anime-character-poster_603843-3026.jpg?w=360" class="card-img-top" alt="..." />
                                <div class="card-button">
                                    <div><button type="button" class="favorite-button rounded"><i class="bi bi-heart"></i></button></div>
                                    <div><button type="button" class="cart-button rounded"><i class="bi bi bi-bag-plus"></i></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

Home.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(Home)`
    .carousel-item{
        height: 32rem;
    }
    .topManga{
        padding: 3rem;
    }
    .topManga h1{
        color: #ffffff;
        padding-bottom: 2rem;
    }
    .card:hover{
        filter: blur(2px);
    }
    .card-button{
        position: absolute;
        padding: 1rem;
        right: 0.3rem;
    }
    button{
        border: none;
        padding: 0.5rem;
    }
    .manga-box{
        padding-bottom: 1rem;
    }
    .favorite-button{
        margin-bottom: 0.5rem;
        background: #ff6961;
    }
`