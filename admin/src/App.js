import logo from './logo.svg';
import './App.css';
import Topbar from './Dashboard/TopBar/Topbar';
import Sidebar from './Dashboard/SideBar/Sidebar';
import Home from './Pages/Home/Home';
import UserList from './Pages/Userlist/UserList';
import User from './Pages/User/Users';
import Newuser from './Pages/NewUser/Newuser';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Product from './Pages/Product/Product';
import ProductList from './Pages/ProductList/ProductList';
import NewProduct from './Pages/NewProduct/NewProduct';
import Login from './Pages/login/Login';
import Trial from './Pages/trial'
import React from 'react';
import { useSelector } from 'react-redux';

const user = false;
const App = () => {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <Router>
  <Routes>
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Trial />} />
  </Routes>
{
  user && (
<>
        <Topbar />
  <div className='container'>
    <Sidebar />
    <Routes>
<Route exact path='/' element={<Home/>} />
<Route path='/users' element={<UserList />} />
<Route path='/users/:id' element={<User />}/>
<Route path='/newUser' element={<Newuser />}/>
<Route path='/product/:id' element={<Product />}/>
<Route path='/products' element={<ProductList />}/>
<Route path='/newProduct' element={<NewProduct />}/>  
    </Routes>
    </div>
</>
  )
}
    </Router>
  )
}

export default App