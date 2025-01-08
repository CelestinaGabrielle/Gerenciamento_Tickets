import React from "react";
import Image from "next/image";

import LoginForm from "../../components/Forms/LoginForm";
import styles from "../../components/Forms/Login.module.css";
import Logo from "../../img/logo.png";

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" className={styles.logoImage} />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
