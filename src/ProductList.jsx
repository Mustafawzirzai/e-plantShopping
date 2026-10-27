import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import CartItem from './CartItem';

export default function ProductList({ onHomeClick }) {
  const plantsArray = [
  {
    "category": "Air Purifying Plants",
    "plants": [
      {
        "name": "Snake Plant",
        "image": "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
        "description": "Produces oxygen at night, improving air quality.",
        "cost": "$15",
        "id": "snake-plant"
      },
      {
        "name": "Spider Plant",
        "image": "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
        "description": "Filters formaldehyde and xylene from the air.",
        "cost": "$12",
        "id": "spider-plant"
      },
      {
        "name": "Peace Lily",
        "image": "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
        "description": "Removes mold spores and purifies the air.",
        "cost": "$18",
        "id": "peace-lily"
      },
      {
        "name": "Boston Fern",
        "image": "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
        "description": "Adds humidity to the air and removes toxins.",
        "cost": "$20",
        "id": "boston-fern"
      },
      {
        "name": "Rubber Plant",
        "image": "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
        "description": "Easy to care for and effective at removing toxins.",
        "cost": "$17",
        "id": "rubber-plant"
      },
      {
        "name": "Aloe Vera",
        "image": "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
        "description": "Purifies the air and has healing properties for skin.",
        "cost": "$14",
        "id": "aloe-vera"
      }
    ]
  },
  {
    "category": "Aromatic Fragrant Plants",
    "plants": [
      {
        "name": "Lavender",
        "image": "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Calming scent, used in aromatherapy.",
        "cost": "$20",
        "id": "lavender"
      },
      {
        "name": "Jasmine",
        "image": "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Sweet fragrance, promotes relaxation.",
        "cost": "$18",
        "id": "jasmine"
      },
      {
        "name": "Rosemary",
        "image": "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
        "description": "Invigorating scent, often used in cooking.",
        "cost": "$15",
        "id": "rosemary"
      },
      {
        "name": "Mint",
        "image": "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
        "description": "Refreshing aroma, used in teas and cooking.",
        "cost": "$12",
        "id": "mint"
      },
      {
        "name": "Lemon Balm",
        "image": "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
        "description": "Citrusy scent, relieves stress and promotes sleep.",
        "cost": "$14",
        "id": "lemon-balm"
      },
      {
        "name": "Hyacinth",
        "image": "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
        "description": "Hyacinth is a beautiful flowering plant known for its fragrant.",
        "cost": "$22",
        "id": "hyacinth"
      }
    ]
  },
  {
    "category": "Insect Repellent Plants",
    "plants": [
      {
        "name": "oregano",
        "image": "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
        "description": "The oregano plants contains compounds that can deter certain insects.",
        "cost": "$10",
        "id": "oregano"
      },
      {
        "name": "Marigold",
        "image": "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
        "description": "Natural insect repellent, also adds color to the garden.",
        "cost": "$8",
        "id": "marigold"
      },
      {
        "name": "Geraniums",
        "image": "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
        "description": "Known for their insect-repelling properties while adding a pleasant scent.",
        "cost": "$20",
        "id": "geraniums"
      },
      {
        "name": "Basil",
        "image": "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
        "description": "Repels flies and mosquitoes, also used in cooking.",
        "cost": "$9",
        "id": "basil"
      },
      {
        "name": "Lavender",
        "image": "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Calming scent, used in aromatherapy.",
        "cost": "$20",
        "id": "lavender"
      },
      {
        "name": "Catnip",
        "image": "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
        "description": "Repels mosquitoes and attracts cats.",
        "cost": "$13",
        "id": "catnip"
      }
    ]
  }
];
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  useEffect(() => {
    setAddedToCart(Object.fromEntries(cartItems.map(item => [item.name, true])));
  }, [cartItems]);

  const calculateTotalQuantity = () => cartItems.reduce((total, item) => total + item.quantity, 0);
  const handleAddToCart = plant => {
    dispatch(addItem(plant));
    setAddedToCart(previous => ({ ...previous, [plant.name]: true }));
  };
  const handleHomeClick = e => { e.preventDefault(); onHomeClick(); };
  const handlePlantsClick = e => { e.preventDefault(); setShowCart(false); };
  const handleCartClick = e => { e.preventDefault(); setShowCart(true); };
  const handleContinueShopping = e => { e.preventDefault(); setShowCart(false); };

  return <>
    <header className="navbar"><strong>Paradise Nursery</strong><nav aria-label="Main navigation">
      <a href="#home" onClick={handleHomeClick}>Home</a>
      <a href="#plants" onClick={handlePlantsClick}>Plants</a>
      <a href="#cart" className="cart" onClick={handleCartClick} aria-label={'Cart with ' + calculateTotalQuantity() + ' items'}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M2 3h3l3 12h11l3-9H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
        Cart <span className="cart_quantity_count" aria-live="polite">{calculateTotalQuantity()}</span>
      </a>
    </nav></header>
    <main>{showCart ? <CartItem onContinueShopping={handleContinueShopping} /> : <>
      <h1>Our Plants</h1>
      <div className="product-grid">{plantsArray.map(group => <section key={group.category}>
        <h2>{group.category}</h2><p>Explore our selection of {group.category.toLowerCase()} for your home and garden.</p>
        <div className="product-list">{group.plants.map(plant => <article className="card product-card" key={plant.name}>
          <img className="product-image" src={plant.image} alt={plant.name} loading="lazy" />
          <h3 className="product-title">{plant.name}</h3><p className="product-description">{plant.description}</p><p className="product-price"><strong>{plant.cost}</strong></p>
          <button className="product-button" disabled={addedToCart[plant.name]} onClick={() => handleAddToCart(plant)}>{addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}</button>
        </article>)}</div>
      </section>)}</div>
    </>}</main>
  </>;
}
