import React from "react";
import { Link } from "react-router-dom";
import {Container, Title} from "./Style";

export default function Home(){
    
    return(
        <Container>
            <Title>Welcome to the antistress terapy!</Title>
            <Link to="dogpage">
                <button>Go to Dog page</button>
            </Link>
        </Container>
    )
}