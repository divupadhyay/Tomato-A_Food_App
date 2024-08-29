import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
const Verify = () => {

    const[searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("Success");
    const orderId = searchParams.get("orderID");
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();


    const verifyPayment = async()=>{
        const response = await axios.post(url+"/api/order/verfiy",{success,orderId});
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
    }
    useEffect(()=>{
        verifyPayment()
    },[])
    

  return (
    <div className='verify'>
       <div className="spinner"></div>
    </div>
  )
}
export default Verify
 