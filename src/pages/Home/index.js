import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    background: linear-gradient(to top, #ede574, #e1f5c4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    h2{
        width: 100%;
        text-align: center;
        font-size: 7rem;
        color: #CD5C5C;
        text-shadow: 5px 5px 10px peru;

        @media only screen and (min-width: 360px) and (max-width: 800px){
        font-size: 5rem;
    }
    }

    h3{
        margin-top: 1rem;
        font-size: 2rem;
        cursor: pointer;
        transition: 1s all;
    }

    h3:hover{
        transform: scale(1.2);
    }
`

export default function Home() {

    return (
        <>
            <Container>
                <h2>
                    <p>Cê ta titi?</p>
                    <p>Fica titi não!</p>
                </h2>
                <h3>
                    <Link to='/dogpage'>Clique aqui e sorria!</Link>
                </h3>
            </Container>
        </>
    )
}