import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

export default function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <section><h1>Shopping Cart</h1>
    {!items.length && <p>Your cart is empty.</p>}
    {items.map(item => <article className="cart-item" key={item.id}>
      <img src={item.image} alt={item.name} />
      <div><h2>{item.name}</h2><p>Unit price: {item.cost}</p>
        <div className="quantity">
          <button aria-label={'Decrease ' + item.name} onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))}>-</button>
          <span>{item.quantity}</span>
          <button aria-label={'Increase ' + item.name} onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}>+</button>
        </div>
        <p>Subtotal: $ {(item.price * item.quantity).toFixed(2)}</p>
        <button className="delete" onClick={() => dispatch(removeItem(item.name))}>Delete</button>
      </div>
    </article>)}
    <h2 aria-live="polite">Total Cart Amount: $ {total.toFixed(2)}</h2>
    <button disabled={!items.length} onClick={() => setMessage('Checkout is coming soon!')}>Checkout</button>
    {message && <p role="status">{message}</p>}
  </section>;
}
