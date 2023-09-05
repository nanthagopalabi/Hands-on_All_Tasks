import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCart, decrementCart, totalPrice } from './cartSlice';

function CartItems(props) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = "https://mocki.io/v1/d5b4d0c7-2d99-4f7d-bb4e-c61f82df9e4a";
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div><h1>Loading...</h1></div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <div className='container'>
        {data.map((product, index) => (
          <div className="card" key={product.id}>
            <img className="card-img-top" src={product.thumbnail} 
            alt={`Product Thumbnail for ${product.title}`} />
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <div className='inputs'>
                <label><h3>Price: ${product.price}</h3></label>
              </div>
              <h4>Description: {product.description}</h4>
              <h4>Discount: {product.discountPercentage}%</h4>
              <h4>Rating: {product.rating}</h4>
              <h4>Stock: {product.stock}</h4>
              <h4>Brand: {product.brand}</h4>
              <h4>Category: {product.category}</h4>
                <div className='addButtons'>
                 <button onClick={() => dispatch(incrementCart())}>Add Cart (+)</button>
                 <button onClick={() => dispatch(decrementCart())}>Remove</button>
                 <h4>Total Quantity: {cart} No's</h4>
                 <h4>Shipping: Free</h4>
                 <button> Total: {cart* product.price}</button>
                 </div>
              <h4>More Images:</h4>  
              <div className="card-img-bottom">
                {product.images.map((image, imageIndex) => (
                  <div key={imageIndex}>
                    <img className='container moreIMG' src={image} alt={`Product Image ${imageIndex}`} />
                  </div>
                ))}
              </div>
              <h4 className='endSymbol'>******************</h4>
            </div>
          </div>
        ))}
        <br></br>
      </div>
    </div>
  )
}

export default CartItems;
