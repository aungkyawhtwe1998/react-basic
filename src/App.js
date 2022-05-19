import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Product from './components/shares/Product';
import {add, remove} from './redux/actions';
function App() {

    const products = useSelector(store =>store.products);

    const dispatch = useDispatch();
    useEffect(async()=>{
        let response =await fetch('https://fakestoreapi.com/products');
        let pds = await response.json();
        console.log(pds);
        dispatch(add(pds));
    },[])

    return (

        <div className="container">
            <div className='row'>
            {
                products.map(pd => <Product key={pd.id} product={pd}/>)
            }

            </div>
           
        </div>
    );
}
export default App;