
import React,{useState, useEffect} from "react";
import CompoA from "./components/CompoA";
import CompoB from "./components/CompoB";
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
const theme = {
    colors:{
        primary:"blue",
        secondary:"red",
        accent:"hotpink"
    },
    font:{
        h1size:"55px",
        h2size:"45px"
    }
}
function App() {

    return (
       <ThemeProvider theme={theme}>
           <GlobalStyle />
           <div>
               <CompoA/>
               <CompoB/>
           </div>
       </ThemeProvider>
    );
}

export default App;