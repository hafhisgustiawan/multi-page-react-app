import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            {/*Cek video 309 classname di NavLink ini berbeda dengan Link dimana dia bisa mengakses isActive param dengan destrukturing obj*/}
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              // style={({isActive})=> {/*blabla bla*/}}
              end //cek video 309
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) => {
                // dalam hal ini, ketika route masuk ke child dari /products routes, misal /products/mal maka /products akan tetap aktif status, makanya di atas pake end NavLink nya
                return isActive ? styles.active : undefined;
              }}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
