import React from 'react'

export default function OrdersNumber() {
  return (
    <div>
         <div className="container-fluid">

{/*  <!-- Page Heading --> */}
<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
</div>

{/*  <!-- Content Row --> */}
<div className="row">

    {/*  <!-- pending orders --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Pending order</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">40,000</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Pick-up */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Pick Up</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">40,000</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*  <!-- Received Orders --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Received Orders</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">215,000</div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>

    {/*  <!-- Delivered Orders --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Delivered Orders
                        </div>
                        <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                            </div>
                          
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    {/*  <!-- Total orders --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Total Orders</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    </div>
  )
}
