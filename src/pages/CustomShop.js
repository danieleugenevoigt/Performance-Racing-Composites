import classes from './CustomShop.module.css';
import Machine1 from '../images/Machine1.mp4';

const CustomShop = () => {
  return (
    <div className={classes.main}> 
      <video className={classes.video} src={Machine1} autoPlay loop muted></video>
      <section className={classes.textSection}>
        <h1>Exactly How You Want It.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aut nesciunt amet, consequatur officia soluta quisquam iure at illum, quaerat dicta quis laborum dolorem eum vitae fugiat odio voluptas expedita natus? Enim, doloribus vitae! Porro doloribus repellat beatae dolor et facere saepe corporis quod ea cumque quaerat maiores nostrum illum, sed deserunt suscipit ipsam animi? Cum ad, cupiditate quo pariatur non neque quis! Deleniti tempora quam saepe quia animi non aliquid distinctio, placeat unde sit autem odio error vero accusantium reiciendis eligendi quibusdam molestias mollitia aspernatur dolor repellendus sapiente doloremque. Laboriosam illo nam placeat voluptas nobis fugiat quia id temporibus.</p>
    </section>
    </div>
  )
}

export default CustomShop
