import React from "react";
import styles from "./Sidebar.module.css";
import Image from 'next/image';  
import Logo from "../../img/logo.png";  

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Minha Conta</a>
          </li>
          <li>
            <a href="#">Sair</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
