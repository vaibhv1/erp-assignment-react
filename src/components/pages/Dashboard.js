// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Header from './Header/Header';
// import '../../styles/dashboard.css';
// const Dashboard = () => {
//   const [totalProducts, setTotalProducts] = useState(0);
//   const [totalOrders, setTotalOrders] = useState(0);

//   useEffect(() => {
//     console.log('Fetching total products...');
//     // Simulated API call or data fetching
//     setTimeout(() => {
//       setTotalProducts(100); // Example value
//     }, 100); // Simulating delay for API call
//   }, []);

//   useEffect(() => {
//     console.log('Fetching total orders...');
//     // Simulated API call or data fetching
//     setTimeout(() => {
//       setTotalOrders(50); // Example value
//     }, 100); // Simulating delay for API call
//   }, []);

//   console.log('Total Products:', totalProducts);
//   console.log('Total Orders:', totalOrders);

//   return (
//     <div className="dashboard">
//       <Header />
//       <h2>Dashboard</h2>
//       <div className="metrics">
//         <div className="metric">
//           <span>Total Products:</span>
//           <span>{totalProducts}</span>
//         </div>
//         <div className="metric">
//           <span>Total Orders:</span>
//           <span>{totalOrders}</span>
//         </div>
//       </div>
//       <div className="navigation">
//         <Link to="/products">
//           <button>Manage Products</button>
//         </Link>
//         <Link to="/orders">
//           <button>Manage Orders</button>
//         </Link>
//         <Link to="/calendar">
//           <button>View Orders Calendar</button>
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default Dashboard;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Header from './Header/Header';
// import '../../styles/dashboard.css';
// const Dashboard = () => {
//   const [totalProducts, setTotalProducts] = useState(0);
//   const [totalOrders, setTotalOrders] = useState(0);

//   useEffect(() => {
//     console.log('Fetching total products...');
//     // Simulated API call or data fetching
//     setTimeout(() => {
//       setTotalProducts(100); // Example value
//     }, 100); // Simulating delay for API call
//   }, []);

//   useEffect(() => {
//     console.log('Fetching total orders...');
//     // Simulated API call or data fetching
//     setTimeout(() => {
//       setTotalOrders(50); // Example value
//     }, 100); // Simulating delay for API call
//   }, []);

//   return (
//     <div className="dashboard">
//       <Header />
//       <h2>Dashboard</h2>
//       <div className="metrics">
//         <div className="metric">
//           <span>Total Products:</span>
//           <span>{totalProducts}</span>
//         </div>
//         <div className="metric">
//           <span>Total Orders:</span>
//           <span>{totalOrders}</span>
//         </div>
//       </div>
//       <div className="navigation">
//         <Link to="/products">
//           <button>Manage Products</button>
//         </Link>
//         <Link to="/orders">
//           <button>Manage Orders</button>
//         </Link>
//         <Link to="/calendar">
//           <button>View Orders Calendar</button>
//         </Link>
//       </div>
//       <div className="background-image-container">
//         {/* Your background image */}
//         <img src="src\styles\logistics.jpg" alt="Background" className="background-image" />
//       </div>
//     </div>
//   );
// };
// export default Dashboard;





import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header/Header';
import '../../styles/dashboard.css';

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    console.log('Fetching total products...');
    // Simulated API call or data fetching
    setTimeout(() => {
      setTotalProducts(100); // Example value
    }, 100); // Simulating delay for API call
  }, []);

  useEffect(() => {
    console.log('Fetching total orders...');
    // Simulated API call or data fetching
    setTimeout(() => {
      setTotalOrders(50); // Example value
    }, 100); // Simulating delay for API call
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="metrics">
        <div className="metric">
          <span className="metric-label">Total Products:</span>
          <span className="metric-value">{totalProducts}</span>
        </div>
        <div className="metric">
          <span className="metric-label">Total Orders:</span>
          <span className="metric-value">{totalOrders}</span>
        </div>
      </div>
      <div className="navigation">
        <Link to="/products">
          <button className="dashboard-button">Manage Products</button>
        </Link>
        <Link to="/orders">
          <button className="dashboard-button">Manage Orders</button>
        </Link>
        <Link to="/calendar">
          <button className="dashboard-button">View Orders Calendar</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
