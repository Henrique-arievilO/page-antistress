import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Title, Image } from "./Style"

export default function Dogs(){

    const [dog, setDog] = useState()

    function getDogs(){
        axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
        console.log(response.data.message)
        setDog(response.data.message)
        })
    }

    return(
        <Container>
            <Link to="/">
                <button>Go to Home</button>
            </Link>
            <Title>Are you stressed?</Title>
            <button onClick={()=>{getDogs()}}>Click to relax!</button>
            <Image src={dog} alt=""/>
        </Container>
    )
}