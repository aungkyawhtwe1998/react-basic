import React,{useContext} from "react";
import {TitleContext} from "./TestContext";

export default function CComponent(){
    const {title,changeTitle} = useContext(TitleContext)
    return(
        <>
            <h1>C Component Title: {title}</h1>
            <button onClick={changeTitle}>C Compo Change title</button>
            {/*<strong>{title}</strong>*/}

        </>
    )
}