import { Ref, useRef } from 'react';
import classes from './Product.module.css';
import {Link} from "react-router-dom";

function Product(props)  {
  const productRef = useRef();

  function NormalizeRating() {
    if (stars > 100 || stars < 10){
       stars = 0;
    }else {
      stars = stars;
    }

    return stars;
  }
      const starTotal = 5;
      let stars = props.RATING / starTotal * 100;
      {stars = NormalizeRating()};
      
     
     
        

          

          return (
            <Link to="/product-page">
            <li  ref={productRef}>
              <div className={classes.container}>
                <div className={classes.image}>
                  <img src={props.URL} alt={props.DESCRIPTION} />
                </div>

                <span className={classes.ratingContainer}>
                  <div className={classes.starsOuter}>
                    <div
                      className={classes.starsInner}
                      style={{ width: stars + "%" }}
                    ></div>
                  </div>
                </span>

                <div className={classes.sku}>SKU {props.SKU}</div>
                <div className={classes.stock}>QTY {props.QUANTITY}</div>
                <div className={classes.title}>{props.DESCRIPTION}</div>
                <div className={classes.price}>{props.PRICE}</div>
                <button className={classes.btn}>Add To Cart</button>
              </div>
            </li>
            </Link>
          );
  }
    
  
  


export default Product
