import React from 'react';
import { MDBInput } from "mdb-react-ui-kit";
import { useCartContext } from './CartContext';

const IphoneX = () => {
const { myObject1 } = useCartContext();
const [subtotal1, setSubtotal1] = React.useState(899); 

function handleInputChange1(event) {
const inputValue1 = event.target.value;
const newSubtotal1 = inputValue1 * 899;
setSubtotal1(newSubtotal1);
}

return (
 <div>
    <div className='container'>
      <div className="card">
       <img className="card-img-top" src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="iPhone X Thumbnail"/>
      <div className="card-body">
      <h5 className="card-title">Iphone X</h5>
      <h3>{Object.entries(myObject1).map(([key, value]) => (
      <p key={key}>
       <strong>{key}:</strong> {value}    
      </p>
      ))}
      </h3>
      </div>
      <div className='inputs'>
        <label><h3>Price:$899</h3></label>
      </div>
         <div className='inputs'>
         <label><h4>Quantity:</h4></label>
         <MDBInput min={1} max={34} defaultValue={1} type="number" id="mytext" onChange={handleInputChange1} size="lg"/>
         </div> 
          <div className='inputs'>
           <label><h4>Sub-Total:</h4></label>
           <h2 id="demo">${subtotal1}</h2> 
          </div>
             <div className='inputs'>
              <label><h3>SHIPPING:</h3></label> <span><h4>FREE</h4></span>
             </div>
              <div className='inputs'>
              <label><h2>Total </h2><span>(Tax Included):</span></label>
             <button type="button" className="btn btn-primary btn-block btn-lg">
              <div className="d-flex justify-content-between"><h2 id="demo">${subtotal1}</h2></div>
             </button>
         </div>
      </div>
        <br></br>
     <div className="gallery js-flickity"
      data-flickity-options='{ "wrapAround": true }'>
        <div className="gallery-cell">
            <div className="carousel-item active">
            <img className="d-block w-100" src="https://i.dummyjson.com/data/products/2/1.jpg" alt="First slide"></img>
        </div>
         <div className="gallery-cell">
           <img className="d-block w-100" src="https://i.dummyjson.com/data/products/2/2.jpg"></img>
         </div>
         <div className="gallery-cell">
          <img className="d-block w-100" src="https://i.dummyjson.com/data/products/2/3.jpg" alt="Third slide"></img>
        </div>
        <div className="gallery-cell">
             <img className="d-block w-100" src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="Third slide"></img>
        </div>
        <div className="gallery-cell">
            <img className="d-block w-100" src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="Third slide"></img>
        </div>
     </div >
   </div>  
 </div>   
 </div>
  );
};
export default IphoneX;
