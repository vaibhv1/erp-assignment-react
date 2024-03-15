// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import ProductsManagement from './components/pages/ProductsManagement';
import OrdersManagement from './components/pages/OrdersManagement';
import OrdersCalendarView from './components/pages/OrdersCalendarView ';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/products" component={ProductsManagement} />
        <Route path="/orders" component={OrdersManagement} />
        <Route path="/calendar" component={OrdersCalendarView} />
      </Switch>
    </Router>
  );
};

export default App;