import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar/Sidebar';
import OrdersNumber from './Orders/OrdersNumber';
import OrdersDetails from './Orders/OrdersDetails';
import OrdersChart from './Orders/OrdersChart';

function Dashboard() {


    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };


return (
    <div>
        
    <div id="page-top">

        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper">
            <Sidebar/>
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*  <!-- Main Content --> */}
                        <div id="content">

                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1}>
                                    <i className="fa fa-bars"></i>
                                </button>

                        
                
                                <OrdersNumber/>
            
                                <OrdersDetails/>

                                <OrdersChart/>

                    </div>
                </div>

                </div>

                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>



            </div>
        </div>
    )
}

export default Dashboard;
