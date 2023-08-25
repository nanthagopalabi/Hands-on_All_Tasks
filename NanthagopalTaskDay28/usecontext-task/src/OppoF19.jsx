import React from 'react';
import { MDBInput } from "mdb-react-ui-kit";
import { useCartContext } from './CartContext';

const OppoF19 = () => {
const { myObject3 } = useCartContext();
const [subtotal3, setSubtotal3] = React.useState(280); 

function handleInputChange3(event) {
  const inputValue3 = event.target.value;
  const newSubtotal3 = inputValue3 * 280;
  setSubtotal3(newSubtotal3);
 }

return (
<div>
  <div className='container'>
    <div className="card">
    <img className="card-img-top" src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="Oppo F19 Thumbnail"/>
      <div className="card-body">
      <h5 className="card-title">Oppo F19</h5>
      <h3>{Object.entries(myObject3).map(([key, value]) => (
      <p key={key}>
      <strong>{key}:</strong> {value}
      </p>
      ))}
      </h3>
      </div>
        <div className='inputs'>
        <label><h3>Price:$280</h3></label>
        </div>
          <div className='inputs'>
          <label><h4>Quantity:</h4></label>
          <MDBInput min={1} max={123} defaultValue={1} type="number" id="mytext" onChange={handleInputChange3} size="lg"/>
          </div>
      
          <div className='inputs'>
          <label><h4>Sub-Total:</h4></label>
          <h2 id="demo">${subtotal3}</h2>
          </div>
              <div className='inputs'>
              <label><h3>SHIPPING:</h3></label> <span><h4>FREE</h4></span>
              </div>
                <div className='inputs'>
                <label><h2>Total </h2><span>(Tax Included):</span></label>
                <button type="button" className="btn btn-primary btn-block btn-lg">
                <div className="d-flex justify-content-between"><h2 id="demo">${subtotal3}</h2></div>
                </button>
              </div>
            </div> 
    <br></br>
    <div className="gallery js-flickity"
    data-flickity-options='{ "wrapAround": true }'>
    <div className="gallery-cell">
     <img className="d-block w-100" src="https://i.dummyjson.com/data/products/4/1.jpg" alt="First slide"></img>
    </div>
    <div className="gallery-cell">
      <img className="d-block w-100" src="https://i.dummyjson.com/data/products/4/2.jpg" alt="First slide"></img>
    </div>
    <div className="gallery-cell">
      <img className="d-block w-100" src="https://i.dummyjson.com/data/products/4/3.jpg" alt="First slide"></img>
    </div>
    <div className="gallery-cell">
      <img className="d-block w-100" src="https://i.dummyjson.com/data/products/4/4.jpg" alt="First slide"></img>
    </div>
    </div >
  </div>  
 </div>
  );
};
export default OppoF19;
