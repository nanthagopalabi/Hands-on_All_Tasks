import React from 'react';
import { MDBInput } from "mdb-react-ui-kit";
import { useCartContext } from './CartContext';

const Iphone9 = () => {
const { myObject } = useCartContext();
const [subtotal, setSubtotal] = React.useState(549); // Initial price value

  function handleInputChange(event) {
  const inputValue = event.target.value;
  const newSubtotal = inputValue * 549;
  setSubtotal(newSubtotal);
  }

  return (
    <div>
     <div className='container'>
      <div className="card">
      <img className="card-img-top" src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="iPhone 9 Thumbnail"/>
        <div className="card-body">
          <h5 className="card-title">Iphone 9</h5>
          <h3>{Object.entries(myObject).map(([key, value]) => (
          <p key={key}>
           <strong>{key}:</strong> {value}
          </p>
        ))}
       </h3>
       </div>
          <div className='inputs'>
             <label><h3>Price:$549</h3></label>
          </div>
           <div className='inputs'>
           <label><h4>Quantity:</h4></label>
           <MDBInput min={1} max={94} defaultValue={1} type="number" id="mytext" onChange={handleInputChange} size="lg"/>
          </div>  
             <div className='inputs'>
             <label><h4>Sub-Total:</h4></label>
             <h2 id="demo">${subtotal}</h2>  
            </div>
              <div className='inputs'>
                <label><h3>SHIPPING:</h3></label> <span><h4>FREE</h4></span>
              </div>
                <div className='inputs'>
                <label><h2>Total </h2><span>(Tax Included):</span></label>
                <button type="button" className="btn btn-primary btn-block btn-lg">
                 <div className="d-flex justify-content-between"><h2 id="demo">${subtotal}</h2></div>
                </button>
             </div>
         </div>
         <br></br>
         <div className="gallery js-flickity"
          data-flickity-options='{ "wrapAround": true }'>
          <div className="gallery-cell">
           <div className="carousel-item active">
            <img className="d-block w-100" src="https://i.dummyjson.com/data/products/1/1.jpg" alt="First slide"></img>
          </div>
           <div className="gallery-cell">
            <img className="d-block w-100" src="https://i.dummyjson.com/data/products/1/2.jpg" alt="Second slide"></img>
          </div>
            <div className="gallery-cell">
            <img className="d-block w-100" src="https://i.dummyjson.com/data/products/1/3.jpg" alt="Third slide"></img>
          </div>
          <div className="gallery-cell">
            <img className="d-block w-100" src="https://i.dummyjson.com/data/products/1/4.jpg" alt="Third slide"></img>
          </div>
          <div className="gallery-cell">
           <img className="d-block w-100" src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"alt="Third slide"></img>
          </div>
       </div >
    </div>  
   </div>
  </div>
  );
};
export default Iphone9;
