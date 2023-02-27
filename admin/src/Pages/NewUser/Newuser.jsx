import React,{useState,useEffect,useMemo} from 'react';
import './Newuser.css';
import { addUser } from '../../redux/apiCall';
import { useDispatch } from 'react-redux';
const Newuser = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e)=>{
setInputs((prev)=>{
  return {...prev,[e.target.name]:e.target.value}
})
console.log(inputs);
  }

  const handleClick = (e)=>{
    e.preventDefault();
    const product = {...inputs};
    console.log(product)
    addUser(product,dispatch);
  }
  return (
    <div className="newUser">
    <h1 className="newUserTitle">New User</h1>
    <form className="newUserForm">
      <div className="newUserItem">
        <label>Username</label>
        <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
      </div>
      <div className="newUserItem">
        <label>Email</label>
        <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
      </div>
      <div className="newUserItem">
        <label>Password</label>
        <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
      </div>
      <button onClick={handleClick} className="newUserButton">Create</button>
    </form>
  </div>
  )
}

export default Newuser
