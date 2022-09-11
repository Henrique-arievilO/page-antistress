import React from "react";
import { Link } from "react-router-dom";
import { Container, Title, Text } from "./Style";

export default function Error(){
    
    return(
        <Container>
            <Title>Error 404!</Title>
            <Text>This page doesn't exist! Please, try again!</Text>
            <Link to="/">
                <button>Go to Home</button>
            </Link>
        </Container>
    )
}