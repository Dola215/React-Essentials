import React from 'react';

const TabButton = ({ children, onClick, ele, content }) => {
  return (
    <li onClick={() => onClick(ele)}>
      <button
        className={`${ele === content ? 'active' : ''}`}
        style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;
