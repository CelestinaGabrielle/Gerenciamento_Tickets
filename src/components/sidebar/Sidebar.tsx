import React from "react";
import styles from "../sidebar/Sidebar.module.css";
import Logo from "../../img/logo.png";

import Image from 'next/image';
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/account">Minha Conta</Link>
          </li>
          <li>
            <Link href="#">Sair</Link>
          </li>
        </ul>
      </nav>    
    </div>
  );
};

export default Sidebar;
