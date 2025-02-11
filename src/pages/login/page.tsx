"use client";
import React from "react";
import Image from "next/image";

import LoginForm from "../../components/Forms/LoginForm";
import styles from "../../components/Forms/Login.module.css";
import Logo from "../../img/logo.png";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const handleValidSubmit = () => {
    onLogin(); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" className={styles.logoImage} />
      </div>
      <LoginForm onValidSubmit={handleValidSubmit} />
    </div>
  );
};

export default Login;
