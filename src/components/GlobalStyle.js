import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #1b1b1b;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden ;
    }
    html{
        @media (max-width: 1024px) {
            font-size: 80%;
        }
       
    }
    button{
        font-weight: bold;
        font-size: 1.1rem;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        cursor: pointer;
        font-family: 'Inter', sans-serif;

        &:hover{
            background: #23d997;
            color: white;
        }
    }
    h2{
        font-weight: 500;
        font-size: 3rem;
        @media (max-width: 992px) {
            font-size: 2.5rem;
        }
    }
    h3{
        color:white;
        font-size: 2rem;
        font-weight: 400;
    }
    h4{
        /* font-weight: bold; */
        font-size: 1.8rem;
    }
    a{
        font-size: 1.1rem ;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;
export default GlobalStyle;
