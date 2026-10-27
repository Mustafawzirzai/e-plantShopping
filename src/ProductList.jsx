import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import { plantGroups as plantsArray } from './plants';

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState(() =>
    Object.fromEntries(items.map(item => [item.name, true]))
  );

  useEffect(() => {
    setAddedToCart(Object.fromEntries(items.map(item => [item.name, true])));
  }, [items]);

  const handleAddToCart = plant => {
    dispatch(addItem(plant));
    setAddedToCart(previous => ({ ...previous, [plant.name]: true }));
  };

  return <><h1>Our Plants</h1>{plantsArray.map(group => <section key={group.category}>
    <h2>{group.category}</h2><p>{group.description}</p>
    <div className="product-grid">{group.plants.map(plant => {
      const added = Boolean(addedToCart[plant.name]);
      return <article className="card" key={plant.id}>
        <img src={plant.image} alt={plant.name} loading="lazy" />
        <h3>{plant.name}</h3><p>{plant.description}</p><p><strong>{plant.cost}</strong></p>
        <button disabled={added} onClick={() => handleAddToCart(plant)}>{added ? 'Added to Cart' : 'Add to cart'}</button>
      </article>;
    })}</div>
  </section>)}</>;
}
