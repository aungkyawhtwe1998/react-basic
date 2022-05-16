import {useSelector,useDispatch} from 'react-redux';
import {login, logout} from './stores/actions';
function App() {

    const logged = useSelector(state => state.loggedin);
    const dispatch = useDispatch();

    return (

        <div className="container">
            <h1>{logged ? "Memeber" : "Guest"}</h1>
            <button onClick={()=>dispatch(login(true))}>login</button>
            <button onClick={()=>dispatch(logout(false))}>logout</button>

        </div>
    );
}
export default App;