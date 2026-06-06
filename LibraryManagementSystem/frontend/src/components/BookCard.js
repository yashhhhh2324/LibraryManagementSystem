import React from 'react';
import './BookCard.css';

function BookCard({ book, role, onAddToCart }) {
  return (
    <div className="book-card fade-in">
      <div className="book-icon">📖</div>
      <div className="book-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
      </div>
      {role === 'student' && (
        <button 
          className="add-cart-btn"
          onClick={() => onAddToCart(book)}
        >
          Add to Cart 🛒
        </button>
      )}
    </div>
  );
}

export default BookCard;
