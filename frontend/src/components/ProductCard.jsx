import "../styles/ProductCard.css";
import { useNavigate } from "react-router-dom";
import handleBuy from "../Handlers/handleBuy";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import cart from "../assets/cart.svg";
import heart from "../assets/heart.svg";

const ProductCard = ({ product, setCartItems, cartItems }) => {
  const { user } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  const navigate = useNavigate();
  const { id, title, description, image } = product;
  const price = "0.01 ETH";

  const handleCart = (product) => {
    console.log(product);
    var cartItems = localStorage.getItem('cartItems');

    if(cartItems == null)
      cartItems = [];
    else {
      cartItems = JSON.parse(cartItems); 
    }
    console.log(cartItems);
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

   }

  return (
    <div
      className="product-card-container"
      onClick={() => {
        // navigate(`/product/${id}`);
      }}
    >
      <div className="product-image-container">
        <img className="product-image" src={image}></img>
      </div>
      <div className="product-details">
        <div className="product-title-text">{title}</div>
        <div className="divider"></div>
        <div className="product-bottom-row">
          <button
            id="product-card-btn"
            onClick={() => { handleCart(product) }}
          >
            <img src={heart}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
