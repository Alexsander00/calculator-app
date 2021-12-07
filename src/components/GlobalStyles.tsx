import { createGlobalStyle } from 'styled-components'

const GlobalStlye = createGlobalStyle`
    *{
        border: 0px;
        box-sizing: border-box;
        font-family: 'Spartan', sans-serif;
        margin: 0px;
        padding: 0px;
    }

    body {
        background-color: ${({ theme }) => theme.main.background};
        height: 100vh;
        transition: background-color 0.5s;
    }
`
export default GlobalStlye
