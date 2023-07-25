import React from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const menuItems = [
    { name: 'Lemonade', price: '$3.99' },
    { name: 'Lemon Chicken', price: '$9.99' },
    { name: 'Lemon Tart', price: '$5.49' },
    { name: 'Cobb Salad', price: '$9.99' },
    { name: 'Gyros', price: '$5.99' },
    { name: 'Lemon Curd', price: '$5.00' },
  ];

  const chunkedMenuItems = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const menuColumns = chunkedMenuItems(menuItems, 3);

  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>
      <div className="menu-columns">
        {menuColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="menu-column">
            {column.map((item, itemIndex) => (
              <div key={itemIndex} className="menu-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
