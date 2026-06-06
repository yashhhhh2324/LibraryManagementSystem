import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AdminPanel from './components/AdminPanel';
import StudentPanel from './components/StudentPanel';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
  const [role, setRole] = useState('admin');
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const API_URL = '/api/books';

  useEffect(() => {
    if (role === 'admin') {
      fetchBooks();
    }
  }, [role]);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setBooks(response.data);
    } catch (error) {
      showNotification('Failed to fetch books', 'error');
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (bookData) => {
    try {
      await axios.post(API_URL, bookData);
      showNotification('Book added successfully!', 'success');
      fetchBooks();
    } catch (error) {
      showNotification('Failed to add book', 'error');
    }
  };

  const addToCart = (book) => {
    if (!cart.some(item => item.id === book.id)) {
      setCart([...cart, book]);
      showNotification('Book added to cart!', 'success');
    } else {
      showNotification('Book already in cart', 'warning');
    }
  };

  const removeFromCart = (bookId) => {
    setCart(cart.filter(book => book.id !== bookId));
    showNotification('Book removed from cart', 'info');
  };

  const borrowBooks = async () => {
    try {
      await axios.post(`${API_URL}/borrow`, cart);
      showNotification('Books borrowed successfully!', 'success');
      setCart([]);
    } catch (error) {
      showNotification('Failed to borrow books', 'error');
    }
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  const toggleRole = () => {
    setRole(role === 'admin' ? 'student' : 'admin');
    setBooks([]);
    setCart([]);
  };

  return (
    <div className="App">
      <Header role={role} toggleRole={toggleRole} cartCount={cart.length} />
      
      {notification.show && (
        <div className={`notification ${notification.type} fade-in`}>
          {notification.message}
        </div>
      )}

      <div className="container">
        {role === 'admin' ? (
          <AdminPanel 
            onAddBook={addBook}
            onFetchBooks={fetchBooks}
          />
        ) : (
          <StudentPanel 
            cart={cart}
            onRemoveFromCart={removeFromCart}
            onBorrowBooks={borrowBooks}
            onViewBooks={fetchBooks}
          />
        )}

        <BookList 
          books={books}
          loading={loading}
          role={role}
          onAddToCart={addToCart}
        />
      </div>
    </div>
  );
}

export default App;
