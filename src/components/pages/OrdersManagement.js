import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ordersManagement.css'; 

function OrdersManagement() {
  const [orders, setOrders] = useState([
    { id: 1, orderId: 'ORD001', customerName: 'John Doe', orderDate: '12-03-2024', status: 'Pending' },
    { id: 2, orderId: 'ORD002', customerName: 'Jane Smith', orderDate: '19-02-2024', status: 'Shipped' },
    { id: 3, orderId: 'ORD003', customerName: 'Alice Johnson', orderDate: '29-02-2024', status: 'Pending' },
    { id: 4, orderId: 'ORD004', customerName: 'Bob Anderson', orderDate: '17-03-2024', status: 'Delivered' },
    // Add more orders as needed
  ]);

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders(orders.map(order => {
      if (order.orderId === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    }));
  };

  const handleDelete = (orderId) => {
    setOrders(orders.filter(order => order.orderId !== orderId));
  };

  return (
    <div className="orders-management" style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Orders Management</h1>

      {/* Orders List */}
      <table style={{ width: '100%', borderCollapse: 'collapse', border:'1px solid black'}}>
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: '#fff' }}>
            <th style={{ padding: '10px' }}>Order ID</th>
            <th style={{ padding: '10px' }}>Customer Name</th>
            <th style={{ padding: '10px' }}>Order Date</th>
            <th style={{ padding: '10px' }}>Status</th>
            <th style={{ padding: '10px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td style={{ padding: '10px', border: '1px solid #000' }}>{order.orderId}</td>
              <td style={{ padding: '10px', border: '1px solid #000' }}>{order.customerName}</td>
              <td style={{ padding: '10px', border: '1px solid #000' }}>{order.orderDate}</td>
              <td style={{ padding: '10px', border: '1px solid #000' }}>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  color: order.status === 'Pending' ? '#FFA500' : 
                         order.status === 'Shipped' ? '#32CD32' : 
                         order.status === 'Cancelled' ? '#FF6347' : 
                         order.status === 'Delivered' ? '#007BFF' : '#000000', 
                  backgroundColor: order.status === 'Pending' ? '#FFF3CD' : 
                                    order.status === 'Shipped' ? '#D4EDDA' : 
                                    order.status === 'Cancelled' ? '#F8D7DA' : 
                                    order.status === 'Delivered' ? '#CCE5FF' : '#FFFFFF' 
                }}>
                  {order.status}
                </span>
              </td>
              <td style={{ padding: '10px', border: '1px solid #000' }}>
                {order.status === 'Pending' && (
                  <>
                    <button onClick={() => handleStatusUpdate(order.orderId, 'Shipped')} style={{ padding: "8px 16px", backgroundColor: "#32CD32", color: "#FFFFFF", border: "none", borderRadius: "4px", cursor: "pointer",marginLeft:"10px" }}>Ship</button>
                    <button onClick={() => handleStatusUpdate(order.orderId, 'Cancelled')} style={{ padding: "8px 16px", backgroundColor: "#FF6347", color: "#FFFFFF", border: "none", borderRadius: "4px", cursor: "pointer",marginLeft:"10px" }}>Cancel</button>
                  </>
                )}
                <button onClick={() => handleDelete(order.orderId)} style={{ padding: "8px 16px", backgroundColor: "#FFA500", color: "#FFFFFF", border: "none", borderRadius: "4px", cursor: "pointer",marginLeft:"10px" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>
      <Link to="/" className="button" style={{ display: 'inline', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '4px', textAlign: 'center' }}>
    Back to Dashboard
  </Link></span>
    </div>
  );
}

export default OrdersManagement;