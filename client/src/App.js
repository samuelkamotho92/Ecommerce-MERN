import './App.css';
import Home from './pages/Home';
import Products from './pages/Product';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { BrowserRouter as Router ,Routes , Route , Navigate} from 'react-router-dom';
function App() {
  const user = true;
  return (
    <div className="App">
<Router>
<Routes >
<Route exact path='/' element={<Home />}/>
<Route path='/products/:category' element={<ProductList />}/>
<Route path='/product/:category' element={<Products />}/>
<Route path='/login' element={user ? <Navigate to='/' /> : <Login />}></Route>
<Route path='/register' element={user ? <Navigate to='/'/>: <Register />}></Route>
<Route path='/cart' element={<Cart />}></Route>
</Routes>
  </Router>
    </div>
  );
}

export default App;
