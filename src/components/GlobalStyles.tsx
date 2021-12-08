import { createGlobalStyle } from 'styled-components'

import { large, mid, small, xsmall } from 'constants/layout'

const GlobalStlye = createGlobalStyle`
    *{
        border: 0px;
        box-sizing: border-box;
        font-family: 'Spartan', sans-serif;
        margin: 0px;
        padding: 0px;
    }

    html {
        @media screen and (min-width: ${xsmall}) {
            font-size: 115%;
        }

        @media screen and (min-width: ${small}) {
            font-size: 130%;
        }

        @media screen and (min-width: ${mid}) {
            font-size: 140%;
        }
    }

    body {
        background-color: ${({ theme }) => theme.main.background};
        height: 100vh;
        transition: background-color 0.5s;
    }

    #root {
        display: grid;
        grid-template: "calc" / 1fr;
        height: 100vh;
        overflow: hidden;
        position: relative;

        @media screen and (min-width: ${large}) {
            gap: 2em;
            grid-template: "calc history" / minmax(650px, 1fr) minmax(250px, 420px);
        }
    }
`
export default GlobalStlye
