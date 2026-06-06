import React, { useState } from 'react';
import './StudentPanel.css';

function StudentPanel({ cart, onRemoveFromCart, onBorrowBooks, onViewBooks }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="student-panel fade-in">
      <div className="panel-header">
        <h2>👨‍🎓 Student Portal</h2>
      </div>
      
      <div className="student-actions">
        <button className="action-btn primary" onClick={onViewBooks}>
          📚 View Available Books
        </button>
        <button 
          className="action-btn secondary" 
          onClick={() => setShowCart(!showCart)}
        >
          🛒 {showCart ? 'Hide' : 'View'} Cart ({cart.length})
        </button>
      </div>

      {showCart && (
        <div className="cart-section">
          <h3>🛒 Your Cart</h3>
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <p className="hint">Add books from the library to borrow them!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((book) => (
                  <div key={book.id} className="cart-item">
                    <div className="cart-item-info">
                      <span className="cart-book-icon">📖</span>
                      <div>
                        <div className="cart-book-title">{book.title}</div>
                        <div className="cart-book-author">by {book.author}</div>
                      </div>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => onRemoveFromCart(book.id)}
                    >
                      ✖
                    </button>
                  </div>
                ))}
              </div>
              <button className="borrow-btn" onClick={onBorrowBooks}>
                📤 Borrow Books ({cart.length})
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default StudentPanel;
