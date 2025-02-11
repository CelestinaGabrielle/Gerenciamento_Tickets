import React from "react";

import styles from "../account/account.module.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Account: React.FC = () => {
  const userData = {
    nome: "João Silva",
    usuario: "joaosilva",
    email: "joao.silva@email.com",
    lotacao: "Setor de TI",
    cargo: "Desenvolvedor Front-end",
    tipoPerfil: "Administrador",
  };

  return (
    <div className={styles.accountContainer}>
      {/* Sidebar */}
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>

      {/* Título da Página */}
      <h1 className={styles.accountTitle}>Minha Conta</h1>

      {/* Conteúdo */}
      <div className={styles.content}>
        <div className={styles.userInfo}>
          <div className={styles.userField}>
            <span className={styles.fieldLabel}>Nome:</span>
            <span className={styles.fieldValue}>{userData.nome}</span>
          </div>
          <div className={styles.userField}>
            <span className={styles.fieldLabel}>Usuário:</span>
            <span className={styles.fieldValue}>{userData.usuario}</span>
          </div>
          <div className={styles.userField}>
            <span className={styles.fieldLabel}>Email:</span>
            <span className={styles.fieldValue}>{userData.email}</span>
          </div>
          <div className={styles.userField}>
            <span className={styles.fieldLabel}>Lotação:</span>
            <span className={styles.fieldValue}>{userData.lotacao}</span>
          </div>
          <div className={styles.userField}>
            <span className={styles.fieldLabel}>Cargo:</span>
            <span className={styles.fieldValue}>{userData.cargo}</span>
          </div>
          <div className={styles.userField}>
            <span className={styles.fieldLabel}>Tipo de Perfil:</span>
            <span className={styles.fieldValue}>{userData.tipoPerfil}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
