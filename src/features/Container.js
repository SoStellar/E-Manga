import React from 'react';
import styled from 'styled-components';

function Container({ children, className }) {
    return (
        <main className={className}>{children}</main>
    )
}

export default styled(Container)`
    max-width:1280px;
    height:100%;
    margin: 0 auto;
    padding: 4rem;
    display: flex;
    justify-content: center;
`
