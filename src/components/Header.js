import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { PRCLogo2 } from '../images/PRCLogo2.svg';

const Header = () => {
  return (
    <div >
      <nav className={classes.image}>
        <h1>Performance Racing Composites</h1>
        <ul>
        <li>
         <Link className={classes.link} to='/home'>
         <svg width="100" height="100" viewBox="0 0 100 100">
          {PRCLogo2}
          <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
        </svg>
         </Link>
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
