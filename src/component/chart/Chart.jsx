import React from "react";
import "./Chart.scss";
// import rechart to use here

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const Chart = ({aspect, title}) => {
  // data goes here
  

  const data = [
    
    {
      "name": "January",
      "Total": 780,
      
    },
    {
      "name": "February",
      "Total": 1890,
      
    },
    {
      "name": "March",
      "Total": 390,
      
    },
    {
      "name": "May",
      "Total": 390,
      
    }
  ]
  

//   const data = [
//     { name: "January", Total: 1234 },
//     { name: "February", Total: 334 },
//     { name: "March", Total: 120 },
//     { name: "April", Total: 340 },
//     { name: "May", Total: 100 },
//     { name: "June", total: 140 },
//   ];



  return (
    <div className="chart">
    <div className="title">{title}</div>
      
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
           
          </defs>
          <XAxis dataKey="name" name="Month" stroke="#666"/>
          <YAxis />
          <CartesianGrid strokeDasharray="3 3"  className="chartGrid"/>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
         
        </AreaChart>
      </ResponsiveContainer>

    
    </div>
  );
};

export default Chart;
