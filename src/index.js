import React from 'react';
import ReactDOM from 'react-dom';
import ColumnChart from './ColumnChart';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: "300px"}}>
      <ColumnChart
        classWrapper="dashboard__chart_orders"
        value={100}
        data={[ 30, 40, 20, 80, 35, 15 ]}
        link="https://google.com"
        label="orders" />
      <ColumnChart
        classWrapper="dashboard__chart_sales"
        value={200}
        data={[ 100, 90, 80, 35, 90, 25 ]}
        label="clients" />
      <ColumnChart
        classWrapper="dashboard__chart_customers"
        value={100}
        data={[]}
        label="orders" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
