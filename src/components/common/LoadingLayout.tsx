import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    min-height:73.5rem;
    background-color: #eee;
    background-image: linear-gradient(
            to bottom right,
            #0f0f0f,
            #686ba0,
            #742783
    );
    position: relative;
    font-family: "sans-serif";
    overflow: hidden;
`
function LoadingLayout(props) {
    return (
        <Container/>
    );
}

export default LoadingLayout;
