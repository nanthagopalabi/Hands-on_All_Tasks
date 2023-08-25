import React from 'react';
import { MDBInput } from "mdb-react-ui-kit";
import { useCartContext } from './CartContext';

const SamsungUniverse9 = () => {
const { myObject2 } = useCartContext();
const [subtotal2, setSubtotal2] = React.useState(1249); 

function handleInputChange2(event) {
const inputValue2 = event.target.value;
const newSubtotal2 = inputValue2 * 1249;
setSubtotal2(newSubtotal2);
}
 return (
 <div>
    <div className='container'>
      <div className="card">
      <img className="card-img-top" src="https://i.dummyjson.com/data/products/3/thumbnail.jpg" alt="samsung universe 9 Thumbnail"/>
        <div className="card-body">
        <h5 className="card-title">Samsung Universe 9</h5>
        <h3>{Object.entries(myObject2).map(([key, value]) => (
        <p key={key}>
         <strong>{key}:</strong> {value}
        </p>
        ))}
         </h3>
        </div>
         <div className='inputs'>
           <label><h3>Price:$1249</h3></label>
         </div>
            <div className='inputs'>
            <label><h4>Quantity:</h4></label>
            <MDBInput min={1} max={36} defaultValue={1} type="number" id="mytext" onChange={handleInputChange2} size="lg"/>
           </div>  
             <div className='inputs'>
              <label><h4>Sub-Total:</h4></label>
              <h2 id="demo">${subtotal2}</h2>
             </div>
              <div className='inputs'>
               <label><h3>SHIPPING:</h3></label> <span><h4>FREE</h4></span>
              </div>
                <div className='inputs'>
                <label><h2>Total </h2><span>(Tax Included):</span></label>
                <button type="button" className="btn btn-primary btn-block btn-lg">
                 <div className="d-flex justify-content-between"><h2 id="demo">${subtotal2}</h2></div>
                </button>
              </div>
            </div>
            <br></br>
            <div className="gallery js-flickity"
              data-flickity-options='{ "wrapAround": true }'>
              <div className="gallery-cell">
              <img className="d-block w-100" src="https://i.dummyjson.com/data/products/3/1.jpg" alt="First slide"></img>
              </div>
         </div>  
        </div> 
    </div>
  );
};
export default SamsungUniverse9;
