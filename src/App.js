
import React  from 'react';
import ACompnent from "./components/ACompnent";
import BComponent from "./components/BComponent";
import TitleContextProvider from "./components/TestContext";
const H1_STYLE = {
    color:"red",
    fontWeight:"bold"
}
function App() {
    // const [title, setTitle] =useState("Title"); //Global state


    return (
        <TitleContextProvider>
            <div className="container">
                <h1 style={H1_STYLE}>Context Api</h1>
                <ACompnent />
                <BComponent />
            </div>
        </TitleContextProvider>


    );
}
export default App;