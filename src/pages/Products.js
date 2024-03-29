import ProductList from "../components/ProductList";
import classes from './Products.module.css';
import { useState, useEffect, useRef } from "react";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const selectedRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://performance-racing-composites-default-rtdb.firebaseio.com/productdata.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let currentProducts = [];

        for (const key in data) {
          const product = {
            id: key,
            ...data[key],
          };

          currentProducts.push(product);
          setSelectedProducts(currentProducts);
        }

        setIsLoading(false);
        setLoadedProducts(currentProducts);
        
      });
  }, []);

  //--------------------------------------------------------------------------------------------------------------
  function handleSelection(event) {
    event.preventDefault();
    const selected = selectedRef.current.value;
    setSelectedProducts(selectedProducts);

    if (selected === "All") {
      setLoadedProducts(selectedProducts);
    } else {
      setLoadedProducts(
        selectedProducts.filter((each) => {
          return each.CATEGORY === selected;
        })
      );
    }
  } //end function -------------------------------------------------------------------------------------------------

  return (
    <section className={classes.productLayout}>
      <form className={classes.selectorForm}>
        <label className={classes.selectorLabel} htmlFor='productSelector'>Filter Products By Type</label>
        <select name='productSelector' className={classes.selectorInput} ref={selectedRef} onChange={handleSelection}>
          <option value='All'>All</option>
          <option value='Body'>Body</option>
          <option value='Engine'>Engine</option>
          <option value='Interior'>Interior</option>
          <option value='Spoilers'>Spoilers</option>
          <option value='Other'>Other</option>
        </select>
      </form>

      <ProductList items={loadedProducts} />
    </section>
  );
}
export default Products
