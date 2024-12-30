import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Minha Conta</a></li>
          <li><a href="#">Sair</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
