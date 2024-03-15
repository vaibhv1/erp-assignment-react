// ParentComponent.js
import React, { useState } from 'react';
import OrdersCalendarView from './OrdersCalendarView';

const ParentComponent = () => {
  // Assuming orders are fetched from an API or stored in state
  const [orders, setOrders] = useState([]);

  // Function to fetch orders from API or initialize orders state
  const fetchOrders = async () => {
    try {
      // Fetch orders data from API
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Call fetchOrders function to fetch orders data
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      {/* Pass the orders prop to the OrdersCalendarView component */}
      <OrdersCalendarView orders={orders} />
    </div>
  );
};

export default ParentComponent;