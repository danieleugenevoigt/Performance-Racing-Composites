import Product from "../components/Product";
import {hood} from "../components/";
const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Product defaultImage = {hood} altText={'hood'} productTitle={'Carbon Fiber Intake'}/>
    </div>
  )
}

export default Products
