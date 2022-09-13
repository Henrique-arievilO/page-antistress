import styled from "styled-components";
import Background from "../../../assets/dog-wallpaper.png"

export const Container = styled.section`
    width: 100vw;
    height: 85vh;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    flex-direction: column;
    text-align: center;
    background: #e0cce0;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
export const Title = styled.h1`
    font-size: 3em;
    background: #7d688b;
`
export const Figure = styled.figure`
    width: 15rem;
    height: 15rem;
    margin: 0 auto;
`
export const Image = styled.img`
    width: 15rem;
    height: 15rem;
    margin: 0 auto;
    object-fit: contain;
    filter: drop-shadow(3px 3px 6px #000);
`