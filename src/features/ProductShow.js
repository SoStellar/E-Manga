import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ProductShow({ className }) {
    return (
        <div className={className}>
            <div class="productName">Book Of Moon</div>
        </div>
    )
}

ProductShow.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(ProductShow)`
    .productName{
        padding-top : 2rem;
        color : #f5f5f5;
        font-size : 2rem;
    }
`