import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import Sidebar from "./Sidebar"
import "./dashboard.css"
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {Doughnut,Line} from "react-chartjs-2"
import {getAdminProduct} from "../../actions/productAction"
import {getAllOrders} from "../../actions/orderAction"
import { getAllUsers } from '../../actions/userAction'
const Dashboard = () => {

    const dispatch = useDispatch();
    const {products} = useSelector((state)=> state.products);
    const {orders} = useSelector((state)=> state.allOrders);
  const {  users } = useSelector((state) => state.allUsers);

    useEffect(()=>{
        dispatch(getAdminProduct());
        dispatch(getAllOrders());
        dispatch(getAllUsers());
      },[dispatch])


    let totalAmount = 0;
    orders && orders.forEach((item)=>{
        totalAmount+=item.totalPrice;
    })

    let outOfStock = 0;
    products && products.forEach((item)=>{
        if(item.Stock===0){
            outOfStock+=1;
        }
    })



    const  lineState = {
        labels:["Initial Amount","Amount Earned"],
        datasets:[
            {
                label:"Total Amount",
                backgroundColor:["tomato"],
                hoverBackgroundColor:["rgb(197,72,49)"],
                data:[0,totalAmount],
            }
        ]
        
    };

    const  doughnutState = {
        labels:["Out Of Stock","InStock"],
        datasets:[
            {
                backgroundColor:["#00A684","#6800B4"],
                hoverBackgroundColor:["#4B5000","#35014F"],
                data:[outOfStock,products.length - outOfStock],
            }
        ]
        
    }; 

  return (
    <div className="dashboard">  
        <Sidebar/>
        <div className="dashboardContainer">
             <Typography component="h1">DashBoard</Typography>
        <div className="dashboardSummary">
            <div>
                <p>Total Amount <br/> Rs{totalAmount}</p>
            </div>
            <div className="dashboardSummaryBox2">
                <Link to="/admin/products">
                    <p>Product</p>
                    <p>{products && products.length}</p>
                </Link>

                <Link to="/admin/orders">
                    <p>Orders</p>
                    <p>{orders && orders.length}</p>
                </Link>

                <Link to="/admin/users">
                    <p>Users</p>
                    <p>{users && users.length}</p>
                </Link>
            </div>
        </div>

        <div className="lineChart">
            <Line data={lineState}/>
        </div>

        <div className="doughnutChart">
            <Doughnut data={doughnutState}/>
        </div>
        </div>
    </div>
  )
}

export default Dashboard
