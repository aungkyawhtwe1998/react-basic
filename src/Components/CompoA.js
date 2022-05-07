import React from "react";
import ReactDOM from "react-dom";
export default function CompoA(){
    return ReactDOM.createPortal(
        <>
            <h1>HELLO WORLD</h1>
            <button>Click me</button>
        </>,
        document.getElementById("portal")
    )
}