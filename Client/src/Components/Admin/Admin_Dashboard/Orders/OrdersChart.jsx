import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function App() {
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
        <h6 className="m-0 font-weight-bold text-primary">Orders Chart</h6>
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
    
      <style>
        {`
          .pie-chart-container {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            }
            @media screen and (max-width: 400px) {
              .legend-container {
                display:flex
                flex-wrap: wrap;
              }
        `}
      </style>
      <div className="pie-chart-container">
        <PieChart width={400} height={400}>
         
        <Legend className="legend-container"
            verticalAlign="top"
          />
          <Pie
            data={data}
            cx={180}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
