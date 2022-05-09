import React, {useContext} from "react";
import {TitleContext} from "./TestContext";

export default function ACompnent(){
    // console.log(title)
    const {title} = useContext(TitleContext);

    return(
        <>
            <h1>A Component title: {title}</h1>
            <h1>A Component </h1>
        </>
    )
}