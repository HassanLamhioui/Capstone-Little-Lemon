import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import '../styles/OrderOnline.css';

const OrderOnline = () => {
  return (
    <div className="order-online-container">
      <h1>Order Online</h1>
      <p>Place your order online and have it delivered to your doorstep!</p>
      <select name="Order" required>
        <option value="" disabled selected hidden>Choose an order</option>
        <option value="item1">Cobb Salad</option>
        <option value="item2">Gyros</option>
        <option value="item3">Lemon Curd</option>
        <option value="item4">Lemon Chicken</option>
        <option value="item5">Lemon Tart</option>
        <option value="item6">Lemonade</option>
      </select>
      <button>
        Order Now <RiShoppingCartLine />
      </button>
    </div>
  );
};

export default OrderOnline;
