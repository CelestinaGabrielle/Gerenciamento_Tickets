'use client';
import React from "react";
import Image from 'next/image';
import Link from "next/link";

import styles from "../sidebar/Sidebar.module.css";
import Logo from "../../img/logo.png";

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
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
            <Link href="/login" onClick={onLogout}>Sair</Link> {/* Usa a função onLogout */}
          </li>
        </ul>
      </nav>    
    </div>
  );
};

export default Sidebar;
