import React, { useState } from 'react';
import './AdminPanel.css';

function AdminPanel({ onAddBook, onFetchBooks }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      onAddBook({ title, author });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="admin-panel fade-in">
      <div className="panel-header">
        <h2>🔑 Admin Dashboard</h2>
      </div>
      
      <div className="admin-content">
        <div className="add-book-section">
          <h3>➕ Add New Book</h3>
          <form onSubmit={handleSubmit} className="book-form">
            <div className="form-group">
              <label htmlFor="title">📚 Book Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter book title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">✍️ Author Name</label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author name"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Add Book to Library ➕
            </button>
          </form>
        </div>

        <div className="admin-actions">
          <button className="fetch-btn" onClick={onFetchBooks}>
            🔄 Refresh Book List
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
