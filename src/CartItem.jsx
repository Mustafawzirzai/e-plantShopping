import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

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
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = item => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = item => dispatch(removeItem(item.name));

  return <section className="cart-container"><h1>Shopping Cart</h1>
    {!cart.length && <p>Your cart is empty.</p>}
    {cart.map(item => <article className="cart-item" key={item.name}>
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-details"><h2 className="cart-item-name">{item.name}</h2><p className="cart-item-cost">Unit price: {item.cost}</p>
        <div className="cart-item-quantity quantity">
          <button className="cart-item-button cart-item-button-dec" aria-label={'Decrease ' + item.name} onClick={() => handleDecrement(item)}>-</button>
          <span className="cart-item-quantity-value" aria-live="polite">{item.quantity}</span>
          <button className="cart-item-button cart-item-button-inc" aria-label={'Increase ' + item.name} onClick={() => handleIncrement(item)}>+</button>
        </div>
        <p className="cart-item-total" aria-live="polite">Subtotal: $ {calculateTotalCost(item).toFixed(2)}</p>
        <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
      </div>
    </article>)}
    <h2 aria-live="polite">Total Cart Amount: $ {calculateTotalAmount().toFixed(2)}</h2>
    <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>{' '}
    <button className="get-started-button1" disabled={!cart.length} onClick={handleCheckoutShopping}>Checkout</button>
  </section>;
}
