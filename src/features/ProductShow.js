import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiHeart } from "react-icons/fi";


function ProductShow({ className }) {
    return (
        <div className={className}>
            <div class="row">
                <div class="productName">Book Of Moon</div>
            </div>
            <div class="row p-4">
                <div class="col-6 book_detail pr-4 justify-content-center">
                    <div class="row">
                        <img class="book_cover" src='https://i.pinimg.com/550x/28/19/d1/2819d12523097ccea2e541d972437128.jpg' />
                    </div>
                </div>
                <div class="col-6 detailFrame">
                    <div class="row">
                        <div class="col-3 frontTag">Author</div>
                        <div class="col-3 backTag">Person</div>
                    </div>
                    <div class="row">
                        <div class="col-3 frontTag">Publisher</div>
                        <div class="col-3 backTag">Name</div>
                    </div>
                    <div class="row">
                        <div class="col-3 frontTag">BookType</div>
                        <div class="col-3 backTag">BookType</div>
                    </div>
                    <div class="row">
                        <div class="col-4 frontTag"><button class='tryIt'>Try it!</button></div>
                        <div class="col-4 backTag"><button class='buyIt'>Buy it!</button></div>
                        <div class="col-4 addFavBtn"><FiHeart /></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

ProductShow.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(ProductShow)`
    .productName{
        text-align : center;
        padding-top : 2rem;
        color : #f5f5f5;
        font-size : 2rem;
    }
    .book_cover{
        width: 75%;
    }
    
    .detailFrame{
        background-color: #ffffff;
    }
`