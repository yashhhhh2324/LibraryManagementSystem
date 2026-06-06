import React from 'react';
import './Header.css';

function Header({ role, toggleRole, cartCount }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="header-title">📚 Library Management</h1>
          <span className="role-badge">{role === 'admin' ? '🔑 Admin' : '👨‍🎓 Student'}</span>
        </div>
        <div className="header-right">
          {role === 'student' && cartCount > 0 && (
            <div className="cart-indicator">
              🛒 <span className="cart-count">{cartCount}</span>
            </div>
          )}
          <button className="toggle-btn" onClick={toggleRole}>
            Switch to {role === 'admin' ? 'Student' : 'Admin'} 🔄
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
