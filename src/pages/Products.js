import Product from "../components/Product";
import classes from './Products.module.css';


const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Product productImage={<img src='https://0xadada.pub/static/images/2015-08-15-raspec-impreza-exterior-front-right-hood.jpg'></img>}
       altText={'hood'} productTitle={'Carbon Fiber Intake hood for 2012-2018 Subaru WRX'} sku={'SKU ' +1854} stock={'Quantity ' + 6} price={'$879.99'}/>
    </div>
  )
}

export default Products
