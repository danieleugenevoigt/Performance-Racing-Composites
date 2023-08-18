import classes from './Header.module.css';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div >
      <nav className={classes.image}>
        <h1>Performance Racing Composites</h1>
        <ul>
        <li>
         <Link className={classes.link} to='/home'>
          <img
            className={classes.logo}
            src={require('../images/PRCLogo1.png')} // Use require() to import the image
            alt="logo"
          />
         </Link>
        </li>
        <li>
          <div className={classes.shopByVehicle}>
            <button>
              <h2>
                <span className={classes.carSymbol}>
                  <span class="material-symbols-outlined">
                    directions_car
                  </span>
                </span>
                Shop By Vehicle
                <span className={classes.expandSymbol}>
                  <span class="material-symbols-outlined">
                    expand_more
                  </span>
                </span>
              </h2>
            </button>
          </div>
        </li>
         <li>
         <Link className={classes.link}to='/products'>Products</Link>
         </li>
         <li>
         <Link className={classes.link}to='/about'>About</Link>
         </li>
         <li>
         <Link className={classes.link}to='/custom-shop'>Custom</Link>
         </li>
         <li>
         <Link className={classes.link}to='/news'>News</Link>
         </li>
         <li>
         <Link className={classes.link}to='/contact'>Contact</Link>
         </li>
         <li>
         <Link className={classes.link}to='/login'>Login</Link>
         </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
