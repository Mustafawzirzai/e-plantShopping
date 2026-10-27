import { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

export default function App() {
  const [showProductList, setShowProductList] = useState(false);
  const handleGetStartedClick = () => setShowProductList(true);
  const handleHomeClick = () => setShowProductList(false);

  return <div className="app-container">
    {showProductList ? <ProductList onHomeClick={handleHomeClick} /> : <main className="landing-page">
      <div className="background-image" />
      <section className="landing content"><h1>Welcome to Paradise Nursery</h1><p>Where Green Meets Serenity</p>
        <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
        <AboutUs />
      </section>
    </main>}
  </div>;
}
