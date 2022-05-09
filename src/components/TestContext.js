import React, {createContext, useState} from "react";
export const TitleContext = createContext();
//provider
function TitleContextProvider(props){
    const [title, setTitle] = useState("Testing");
    const changeTitle=()=>{
        let dd = "Testing" + Math.ceil(Math.random(0,1)*1000);
        setTitle(dd);
    }
    const data = {title, changeTitle};
    return(
        //export provider value
        <TitleContext.Provider value={data}>

            {props.children}
        </TitleContext.Provider>
    )
}
export default TitleContextProvider;