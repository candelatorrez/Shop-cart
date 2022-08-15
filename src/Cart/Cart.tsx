// import {Wrapper} from "./Cart.styles";
import CartItem from "../CartItem/CardItem";
import { CartItemType } from "../App";
import "./Cart.css"

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
  };
  
  const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: CartItemType[]) =>
      items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  
    return (
       <div className="containerCart">
        <h2 id="carth2">Your Shopping Cart</h2>
        {cartItems.length === 0 ? <p>No items in cart.</p> : null}
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <h2 id="idTotal">Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </div>
    );
  };
  
  export default Cart;