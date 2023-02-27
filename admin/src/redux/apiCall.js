import { 
  loginFailure, 
  loginStart,
  loginSuccess,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure
} 
from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";



export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/product/getProducts");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
     await userRequest.delete(`/product/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/product/createproduct`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};


//user
export const getUsers = async (dispatch)=>{
dispatch(getUserStart());
try{
const res = await userRequest.get('/users/getUser');
console.log(res.data);
dispatch(getUserSuccess(res.data));
}catch(err){
dispatch(getUserFailure());
}
}

//delete user 
export const deleteUser = async (id,dispatch)=>{
  dispatch(deleteUserStart())
  try
  {
    await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess())
  }catch(err){
dispatch(deleteUserFailure());
  }
}

//update User
export const updateUser = async(id,user,dispatch)=>{
dispatch(updateUserStart())
try
{

dispatch(updateUserSuccess({id,user}))
}catch(err){
  dispatch(updateUserFailure)
}
}

//add user

export const addUser = async (user, dispatch) => {
  console.log(user);
  dispatch(addUserStart());
  try {
    const res = await userRequest.post(`/users/createUser`, user);
    console.log(res);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};