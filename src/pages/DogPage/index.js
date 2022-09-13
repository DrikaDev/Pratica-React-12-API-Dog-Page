import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Background = styled.div`
    background: linear-gradient(to top, #ed4264, #ffedbc);
    width: 100%;
    height: 100vh;
`
const Home = styled.div`
    text-align: center;
    font-size: 2rem;

`
const Title = styled.h1`
    text-align: center;
`
const Fotos = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        max-width: 100%;
        max-height: 100%;
        background: white;
        display: flex;
        box-shadow: 5px 5px 15px black;
        border-radius: 20px;
    }
    

    img{
    width: 400px;
    height: 400px;
    object-fit: contain;
    justify-content: center;

    @media only screen and (min-width: 360px) and (max-width: 800px){
        width: 350px;
    }
    }

    button{
        width: 10rem;
        border-radius: 5px;
        box-shadow: 5px 5px 15px black;
        border: none;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
    }
`

export default function DogPage() {

    const [dog, setDog] = useState()
    const [status, setStatus] = useState(false)

    function getDog() {
        axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
            console.log(response.data.message)
            setDog(response.data.message)
            setStatus(true)
        })
    }

    return (
        <>
            <Background>
                <Home><Link to='/'>Home</Link></Home>
                <Title>"A felicidade começa com um nariz gelado e termina com um rabo abanando!"</Title>
                <Fotos>
                    <button onClick={() => { getDog() }}>Clique para ver!</button>
                    <div>
                        {status && <img src={dog} alt='foto do doguinho' />}
                    </div>
                </Fotos>
            </Background>
        </>
    )
}