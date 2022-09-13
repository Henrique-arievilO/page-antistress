import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Title, Image, Figure } from "./Style"

export default function Dogs(){

    const [dog, setDog] = useState()

    const [status, setStatus] = useState(false)

    function getDogs(){
        axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
        setDog(response.data.message)
        setStatus(true)
        })
    }

    return(
        <Container>
            <Link to="/">
                <button>Go to Home</button>
            </Link>
            <Title>Are you stressed?</Title>
            <button onClick={()=>{getDogs()}}>Click to relax!</button>
            <Figure>
                {status && <Image src={dog} alt=""/>}
            </Figure>
        </Container>
    )
}