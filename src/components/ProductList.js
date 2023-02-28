import classes from '../components/ProductList.module.css';
import Product from '../components/Product';

function ProductList (props)  {
  
  return (
  
      
      <ul className={classes.productLayout}>
        {props.items.map((item) => (
          <Product
            CATEGORY={item.CATEGORY}
            DESCRIPTION={item.DESCRIPTION}
            key={item.id}
            id={item.id}
            PRICE={item.PRICE}
            QUANTITY={item.QUANTITY}
            RATING={item.RATING}
            SKU={item.SKU}
            URL={item.URL}
          />
        ))}
      </ul>
  );
  
}

export default ProductList
