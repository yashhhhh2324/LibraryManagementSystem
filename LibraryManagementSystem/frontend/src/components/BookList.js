import React from 'react';
import BookCard from './BookCard';
import './BookList.css';

function BookList({ books, loading, role, onAddToCart }) {
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📚</div>
        <h2>No books available</h2>
        <p>{role === 'admin' ? 'Add your first book to get started!' : 'Click "View Available Books" to see the library collection'}</p>
      </div>
    );
  }

  return (
    <div className="book-list-section">
      <h2 className="section-title">
        {role === 'admin' ? '📖 Book Collection' : '📚 Available Books'}
      </h2>
      <div className="book-grid">
        {books.map((book) => (
          <BookCard 
            key={book.id}
            book={book}
            role={role}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;
