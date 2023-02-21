import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    console.log(location);
    const cart = location.state.products;
    const data = location.state.stripeData;
    console.log(data,cart);
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
          try {
            const url = `http://localhost:8000/api/v1/order/createOrder`;
            const res = await axios.post(url, {
              userId: currentUser._id,
              products: cart.products.map((item) => ({
                productId: item._id,
                quantity: item._quantity,
              })),
              amount: cart.total,
              address: data.billing_details.address,
            });
            setOrderId(res.data._id);
          } catch {

          }
        };
        data && createOrder();
      }, [cart, data, currentUser]);
  return (
   <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link style={{ padding: 10, marginTop: 20 }} to='/'>Go to Homepage</Link>
    </div>
  )
}

export default Success
