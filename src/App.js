
import React, {useState} from 'react';
import AddUser from "./Components/AddUser";
import UserAdd from "./Components/UserAdd";
//useRef hook to handle html dom
function App() {

    const [user,setUser] = useState({});
    const addUserHandler = (newUser) =>{
        console.log('new user', newUser);


        /*setUser((previous) => {
            console.log('previous',previous)
            return{
                name:newUser.name,
                password:newUser.password
            }
        })*/

        /*const userId = {id:1}
               setUser({...newUser, userId})*/
        /*OR*/
        setUser(prev=>{
            return{
                id:1,name:newUser.name,password:newUser.password
            }
        });



    }
    return (

        <div className="container">
            <h1>User name: {user.name}</h1>
            <h1>Password: {user.password}</h1>
            {/*<AddUser addUser = {addUserHandler}/>*/}

            {/*useRef tutorial*/}
            <UserAdd addUser = {addUserHandler}/>
        </div>
    );
}
export default App;