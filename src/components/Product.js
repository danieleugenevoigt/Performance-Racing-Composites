

const Product = (props) => {
  
  return (
    <div>
      <img src={props.defaultImage} alt={props.altText}/> 
      <i class="fa fa-star" aria-hidden="true"></i> 
      <h1>{props.productTitle}</h1>

    </div>
  )
}

export default Product
