import { combineReducers} from 'redux';
import accountReducer from './reducer/AccountReducer';
import userReducer from './reducer/UserReducer';
const reducers = combineReducers({
    account: accountReducer,
    user:userReducer
});
export default reducers;