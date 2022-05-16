import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux'; //to bind action creators
import {actionCreators} from './stores/actionCreators'
import TCompo from './components/TCompo';
import ZCompo from './components/ZCompo';
import { useRef } from 'react';
function App() {
    const nameRef = useRef();
    const phoneRef = useRef();

    const account = useSelector(state=>state.account);
    const users = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const {add, remove, insert, drop} = bindActionCreators(actionCreators, dispatch);
    const addUser = (e) =>{
        e.preventDefault();
        let user = {
            phone:phoneRef.current.value,
            name:nameRef.current.value
        }
        insert(user);
        phoneRef.current.value = "";
        nameRef.current.value ="";
    }
    return (
 
        <div className="container">
            <h1>{account}</h1>
            {
                users.map(user=><p onClick={()=>drop(user)}>{user.name} : {user.phone}</p>)
            }
            <button onClick={()=>add(50)}>add</button>
            <button onClick={()=>remove(50)}>Remove</button> <br/><br/>

           <form onSubmit={addUser}>
               <input  type = "phone" ref= {phoneRef}/> <br/><br/>
               <input  type = "name" ref= {nameRef}/><br/> <br/>
               <input type="submit" />

           </form>
           <hr/>
           <TCompo />
        </div>
    );
}
export default App;