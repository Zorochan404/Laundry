import React, { useState } from 'react';
import '../Dashboard.css';

function Sidebar() {
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
           

                    {/*  <!-- Sidebar --> */}
                    
                    <ul className={style} id="accordionSidebar" >


                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                           
                            <div className="sidebar-brand-text mx-3" style={{ color: 'black' }}>Admin</div>
                        </a>

                        {/*   <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" style={{ borderColor: 'black' }} />


                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active" >
                            <a className="nav-link" href="index.html">
                                <i className="fas fa-fw fa-tachometer-alt" style={{ color: 'black' }}></i>
                                <span style={{ color: 'black' }}>Dashboard</span></a>
                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" style={{ borderColor: 'black' }} />



                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-cog" style={{ color: 'black' }}></i>
                                <span style={{ color: 'black' }}> Components</span>
                            </a>
                        </li>


                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" style={{ borderColor: 'black' }} />


                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                    

                        {/* <!-- Nav Item - Charts --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <i className="fas fa-fw fa-chart-area" style={{ color: 'black' }}></i>
                                <span style={{ color: 'black' }}>Charts</span></a>
                        </li>
                        <hr className="sidebar-divider my-0" style={{ borderColor: 'black' }} />


                        {/*  <!-- Nav Item - Tables --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table" style={{ color: 'black' }}></i>
                                <span style={{ color: 'black' }}>Tables</span></a>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" style={{ borderColor: 'black' }} />

                    </ul>
                
                    </div>


    )}

    export default Sidebar