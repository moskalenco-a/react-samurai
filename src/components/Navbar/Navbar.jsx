import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const classNameFunc = ({ isActive }) => {
    // console.log('classNameFunc');
    // console.log(isActive);
    return isActive ? styles.active : "";
  }
  return <nav>
    <ul>
      <li className={styles.item}>
        <NavLink to="/profile" className={classNameFunc}>Profile</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/messages" className={classNameFunc}>Messages</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/news" className={classNameFunc}>News</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/music" className={classNameFunc}>Music</NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/settings" className={classNameFunc}>Settings</NavLink>
      </li>
    </ul>
  </nav>;
};

export default Navbar;
