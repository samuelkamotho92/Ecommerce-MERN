import { loginStart,loginFailure,loginSuccess } from "./userRedux";
import axios from 'axios';
import { useSelector,useDispatch } from "react-redux";
import { userRequest ,publicRequets } from "../requestMethod";
export const login = async(dispatch,user)=>{
    const {username,password} = user;
    console.log(user);
    dispatch(loginStart());
    try
    {
  const url = `http://localhost:8000/api/v1/auth/login`;
  const resp = await fetch(url,{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        username,
        password
    }),
    credentials:'include',
    withCredentials:true
  })
  console.log(resp.ok)
  const data = await resp.json();
  console.log(data);
  if(resp.ok){
    dispatch(loginSuccess(data));
  } else{
    dispatch(loginFailure());
  }
    }catch(err){
dispatch(loginFailure());
    }
}