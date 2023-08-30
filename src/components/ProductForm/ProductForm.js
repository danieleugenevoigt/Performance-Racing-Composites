import classes from './ProductForm.module.css';
import { useEffect, useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {auth} from '../firebaseConfig';


const ProductForm = (props) => {
  const navigate = useNavigate();
  const urlInputRef = useRef();
  const ratingInputRef = useRef();
  const descriptionInputRef = useRef();
  const skuInputRef = useRef();
  const quantityInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();

  const [authToken, setAuthToken] = useState({}); 
   
  
  useEffect(() => {
    const fetchAuthToken = async () => {
      try {
        const token = await auth.currentUser.uid;
        setAuthToken(token);
      } catch (error) {
        // Handle error
        console.error('Error fetching auth token:', error);
      }
    };

    fetchAuthToken();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('authToken = ' + authToken);
    const enteredUrl = urlInputRef.current.value;
    const enteredRating= ratingInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredSku = skuInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;


    const productData = {
      URL: enteredUrl,
      RATING: enteredRating,
      DESCRIPTION: enteredDescription,
      SKU: enteredSku,
      QUANTITY: enteredQuantity,
      PRICE: enteredPrice,
      CATEGORY: enteredCategory,
    };

  fetch(
  "https://performance-racing-composites-default-rtdb.firebaseio.com/productdata.json",
    { 
    method: "POST",
    body: JSON.stringify(productData),
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": `${authToken}`,
    },
  }).then(()=>{
    navigate('/home',{replace:true});
  });

  console.log('posting data to database');
  
}


    


  return (
    <div>
      <form id="productForm" className={props.isShow2 ? classes.hide : ""} onSubmit={handleSubmit}>
        <div>
          <label htmlFor='image url'>Image Url </label>
          <input
            type='text'
            required id='url'
            ref={urlInputRef}
          />
        </div>
        <div>
          <label htmlFor='rating'>Rating</label>
          <input
            type='float'
            required id='rating'
            ref={ratingInputRef}
          />
        </div>
        <div>
          <label htmlFor='description' placeholder='text'>
            Description{" "}
          </label>{" "}
          <input
            type='text'
            required id='description'
            ref={descriptionInputRef}
          />
        </div>
        <label htmlFor='sku' placeholder='12345'>
          SKU{" "}
        </label>{" "}
        <input
          type='number'
          required id='sku'
          ref={skuInputRef}
        />
        <label htmlFor='quantity' placeholder='99'>
          Quantity{" "}
        </label>{" "}
        <input
          type='number'
          required id='quantity'
          ref={quantityInputRef}
        />
        <div>
          <label htmlFor='price'>Price </label>
          <input
            type='float'
            id='price'
            ref={priceInputRef}
          />
        </div>
        <div>
          <label htmlFor="catagory">Choose a product category:</label>
          <select name="category" id="category" ref={categoryInputRef}>
            <option value="Body">Body</option>
            <option value="Engine">Engine</option>
            <option value="Interior">Interior</option>
            <option value="Spoilers">Spoilers</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <input type='submit' />
        </div>
      </form>
    </div>
  );
}

export default ProductForm