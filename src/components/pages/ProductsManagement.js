import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/productsManagement.css'; 

const ProductsManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: 10.99, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 20.49, stockQuantity: 50 },
    { id: 3, name: 'Product 3', category: 'Category A', price: 15.99, stockQuantity: 75 }
  ]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    stockQuantity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000) + 1; // Generate a random ID for the new product
    const productToAdd = { id, ...newProduct };
    setProducts([...products, productToAdd]);
    setNewProduct({
      name: '',
      category: '',
      price: '',
      stockQuantity: ''
    });
  };

  return (
    <div className="products-management">
      <h2>Products Management</h2>
      <form onSubmit={handleSubmit} style={{ background: "rgba(224, 232, 240, 0.5)", padding: "20px", maxWidth: "300px" }}>
  <label style={{ color: "#333", marginBottom: "10px" }}> {/* Dark Gray */}
    Name:
    <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} style={{ backgroundColor: "#FFFFFF", padding: "8px", marginLeft: "10px" }} /> {/* White */}
  </label>
  <label style={{ color: "#333", marginBottom: "10px" }}> {/* Dark Gray */}
    Category:
    <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} style={{ backgroundColor: "#FFFFFF", padding: "8px", marginLeft: "10px" }} /> {/* White */}
  </label>
  <label style={{ color: "#333", marginBottom: "10px" }}> {/* Dark Gray */}
    Price:
    <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} style={{ backgroundColor: "#FFFFFF", padding: "8px", marginLeft: "10px" }} /> {/* White */}
  </label>
  <label style={{ color: "#333", marginBottom: "10px" }}> {/* Dark Gray */}
    Stock Quantity:
    <input type="text" name="stockQuantity" value={newProduct.stockQuantity} onChange={handleInputChange} style={{ backgroundColor: "#FFFFFF", padding: "8px", marginLeft: "10px" }} /> {/* White */}
  </label>
  <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>Add Product</button> {/* Green Button */}
</form>

<div style={{ marginTop: "20px", width: "100%", color: "black" }}>
  <h3 style={{ marginBottom: "10px", color: "black", backgroundColor: "#E0E8F0", padding: "10px", borderRadius: "4px", textAlign: "center" }}>Product List</h3>
  <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
    <thead>
      <tr style={{ backgroundColor: "#E0E8F0" }}>
        <th style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Name</th>
        <th style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Category</th>
        <th style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Price</th>
        <th style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {products.map(product => (
        <tr key={product.id} style={{ backgroundColor: "#FFFFFF" }}>
          <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{product.name}</td>
          <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{product.category}</td>
          <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{product.price}</td>
          <td style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>{product.stockQuantity}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


<Link to="/" className="button" style={{ marginTop: "20px", color: "#FFFFFF", backgroundColor: "#4CAF50", padding: "10px 20px", textDecoration: "none", borderRadius: "4px" }}>Back to Dashboard</Link>
      </div>
  );
};

export default ProductsManagement;