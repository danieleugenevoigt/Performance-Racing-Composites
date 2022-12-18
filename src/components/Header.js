import classes from './Header.module.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div >
      <nav className={classes.image}>
        <h1>Performance Racing Composites</h1>
        <ul>
        <li>
         <Link className={classes.link} to='/home'>Home</Link>
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
        </ul>
      </nav>
    </div>
  )
}

export default Header
