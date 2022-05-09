import React, {useContext} from "react";
// import CComponent from "./CComponent";
import {TitleContext} from "./TestContext";

export default function BComponent(){
    const {title, changeTitle} = useContext(TitleContext);
    return(
        <>
            <h1>B Component Title: {{title}}</h1>
            <button onClick={changeTitle}>Change Title</button>
           {/* <strong>{title}</strong>
            <CComponent title={title}/>*/}
            {/*Props Drilling*/}
        </>
    )
}