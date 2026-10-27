import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const count = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));
  return <>
    <header><strong>Paradise Nursery</strong><nav>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('plants')}>Plants</button>
      <button onClick={() => setPage('cart')}>Cart ({count})</button>
    </nav></header>
    <main>
      {page === 'home' && <section className="landing"><h1>Welcome to Paradise Nursery</h1><p>Where Green Meets Serenity</p><button onClick={() => setPage('plants')}>Get Started</button><AboutUs /></section>}
      {page === 'plants' && <ProductList />}
      {page === 'cart' && <CartItem onContinueShopping={() => setPage('plants')} />}
    </main>
  </>;
}
