import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <div class="items">
        <h1>My Bakery</h1>
        {bakeryData.map((item, index) => (
          <BakeryItem
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            func={() => addToCart(item)}
          />
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? <p>Add stuff to cart</p> : null}
        {cart.map((item) => (
          <div key={item.name}>
            <p>
              {item.quantity}x {item.name}
            </p>
          </div>
        ))}
        {cart.length !== 0 ? <h2>Price: ${totalPrice}</h2> : null}
      </div>
    </div>
  );
}

export default App;
