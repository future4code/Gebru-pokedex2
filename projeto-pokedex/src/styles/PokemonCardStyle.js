import styled from 'styled-components';
import {lightColor, mainColor, secondColor} from '../constants/colors';
import { Pagination } from '@mui/material';
import { CircularProgress } from "@mui/material";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const EmptyPokedexImage = styled.img`
margin-top: 30px;
    max-width: 50vw;
    max-height: 50vh;
`

export const PaginationStyled = styled(Pagination)`
    background-color: rgba(222, 222, 222, .2);
    border-radius: 10em;
    margin: 10px;
`

export const DivContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export const Loading = styled(CircularProgress)`
    margin: 30px;
`

export const BattleMessage = styled.p`
    display: flex;
    align-items: center;
    background-color: rgba(222, 222, 222, .2);
    color: white;
    padding: 10px;
    margin: 10px;
    border-radius: .5em;
    font-size: 1.3rem;
    opacity: 1;
    transition: opacity 1s ease-in;
    padding-right: 20px;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(222, 222, 222, .2);
    color: white;
    box-shadow:  2px 3px 8px rgba(224, 224, 222);
    border-radius: 50rem;
    width: 18vw;
    padding: 20px;
    margin: 10px;
    p{
        font-size: 1.5rem;
        text-transform: capitalize;
    }
    img{
        max-width: 20vw;
        max-height: 20vh;
        margin: 10px;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 20vw;
    height: 20vh;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    button{
        margin: 10px;
        padding: 10px;
        border: 1px solid white;
        background: ${secondColor};
        color: white;
        border-radius: 10em;
        cursor: pointer;
        :hover{
            background-color: ${lightColor};
            border: 1px solid white;
            color: white;
        }
    }
`
