import classes from './Product.module.css'

const Product = (props) => {
  
  return (
    <div className={classes.main}>
      <div className={classes.container}> 
        <div className={classes.image}>{props.productImage}</div>
        <i className='fa fa-star 'aria-hidden="true"></i> 
        <p className={classes.title}>{props.productTitle}</p>
        <h4 className={classes.sku}> {props.sku}</h4>
        <h4 className={classes.stock}>{props.stock}</h4>
        <h2 className={classes.price}>{props.price}</h2>
        <button className={classes.btn}>Add</button>
      </div>
      

    </div>
  )
}

export default Product
