import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CartSlice';

export default function CartItem({ onContinueShopping }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      total += parseFloat(item.cost.substring(1)) * item.quantity;
    });
    return total;
  };

  const calculateTotalCost = item => parseFloat(item.cost.substring(1)) * item.quantity;

  const handleContinueShopping = e => onContinueShopping(e);

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = item => {
    dispatch(addItem(item));
  };

  const handleDecrement = item => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = item => dispatch(removeItem(item.name));

  return <section><h1>Shopping Cart</h1>
    {!cart.length && <p>Your cart is empty.</p>}
    {cart.map(item => <article className="cart-item" key={item.name}>
      <img src={item.image} alt={item.name} />
      <div><h2>{item.name}</h2><p>Unit price: {item.cost}</p>
        <div className="quantity">
          <button aria-label={'Decrease ' + item.name} onClick={() => handleDecrement(item)}>-</button>
          <span aria-live="polite">{item.quantity}</span>
          <button aria-label={'Increase ' + item.name} onClick={() => handleIncrement(item)}>+</button>
        </div>
        <p aria-live="polite">Subtotal: $ {calculateTotalCost(item).toFixed(2)}</p>
        <button className="delete" onClick={() => handleRemove(item)}>Delete</button>
      </div>
    </article>)}
    <h2 aria-live="polite">Total Cart Amount: $ {calculateTotalAmount().toFixed(2)}</h2>
    <button onClick={handleContinueShopping}>Continue Shopping</button>{' '}
    <button disabled={!cart.length} onClick={handleCheckoutShopping}>Checkout</button>
  </section>;
}
