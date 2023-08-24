import React from 'react'

export default function OrdersDetails() {
  return (
    <div>
           <div className="container-fluid">
        <div className="row">

{/*   <!-- Area Chart --> */}
<div className="col-xl-8 col-lg-7">
    <div className="card shadow mb-4">
        {/*  <!-- Card Header - Dropdown --> */}
        <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Pending Orders</h6>
            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Time:</div>
                    <a className="dropdown-item" href="#">Today</a>
                    <a className="dropdown-item" href="#">This Week</a>
                    
                    <a className="dropdown-item" href="#">All Time</a>
                </div>
            </div>
        </div>
        {/*  <!-- Card Body --> */}
        <div className="card-body">
            <div className="chart-area">
                <canvas id="myAreaChart"></canvas>
            </div>
        </div>
    </div>
</div>

{/*  <!-- Pie Chart --> */}
<div className="col-xl-4 col-lg-5">
    <div className="card shadow mb-4">
        {/*  <!-- Card Header - Dropdown --> */}
        <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Customer Details</h6>
            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
        {/*  <!-- Card Body --> */}
        <div className="card-body">
            <div className="chart-pie pt-4 pb-2">
                <canvas id="myPieChart"></canvas>
            </div>
           
        </div>
        </div>
</div>
 {/* Pick Up */}

        <div className="col-xl-8 col-lg-7">
    <div className="card shadow mb-4">
        {/*  <!-- Card Header - Dropdown --> */}
        <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Pick Up</h6>
            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Time:</div>
                    <a className="dropdown-item" href="#">Today</a>
                    <a className="dropdown-item" href="#">This Week</a>
                    
                    <a className="dropdown-item" href="#">All Time</a>
                </div>
            </div>
        </div>
        {/*  <!-- Card Body --> */}
        <div className="card-body">
            <div className="chart-area">
                <canvas id="myAreaChart"></canvas>
            </div>
        </div>

        
        
    </div>
</div>
    {/* received orders */}



    <div className="col-xl-8 col-lg-7">
    <div className="card shadow mb-4">
        {/*  <!-- Card Header - Dropdown --> */}
        <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Received Orders</h6>
            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Time:</div>
                    <a className="dropdown-item" href="#">Today</a>
                    <a className="dropdown-item" href="#">This Week</a>
                    
                    <a className="dropdown-item" href="#">All Time</a>
                </div>
            </div>
        </div>
        {/*  <!-- Card Body --> */}
        <div className="card-body">
            <div className="chart-area">
                <canvas id="myAreaChart"></canvas>
            </div>
        </div>
    </div>
</div>

{/* delivered orders */}

<div className="col-xl-8 col-lg-7">
    <div className="card shadow mb-4">
        {/*  <!-- Card Header - Dropdown --> */}
        <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Delivered orders</h6>
            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Time:</div>
                    <a className="dropdown-item" href="#">Today</a>
                    <a className="dropdown-item" href="#">This Week</a>
                    
                    <a className="dropdown-item" href="#">All Time</a>
                </div>
            </div>
        </div>
        {/*  <!-- Card Body --> */}
        <div className="card-body">
            <div className="chart-area">
                <canvas id="myAreaChart"></canvas>
            </div>
        </div>
    </div>
</div>


</div>


</div>
    </div>
  )
}
