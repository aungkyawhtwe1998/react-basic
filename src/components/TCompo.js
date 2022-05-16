import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import { actionCreators } from '../stores/actionCreators';
import ZCompo from './ZCompo';
export default function TCompo() {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();
  const {add, remove} = bindActionCreators(actionCreators, dispatch);
  
  return (
    <div>
      <h1>{account}</h1>
      <ZCompo/>
      <hr></hr>
      <button onClick={()=>add(50)}>Add</button>
      <button onClick={()=>remove(50)}>Remove</button>
    </div>
  )
}
