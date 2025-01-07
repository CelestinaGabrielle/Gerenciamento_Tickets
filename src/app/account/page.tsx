import React from "react";

import styles from "../account/account.module.css"; 
import Sidebar from "../../components/sidebar/Sidebar";

const Account: React.FC = () => {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <h1 className={styles.accountTitle}>Minha Conta</h1>
      <p className={styles.Content}>Informações sobre a conta do usuário</p>
    </div>
  );
};

export default Account;
