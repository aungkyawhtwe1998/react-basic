import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
const initialData = {
    products:[
        {name:'Mg Mg'},
        {name:'Aung Aung'}
    ]
}
export const store = createStore(reducers,initialData,applyMiddleware(thunk));