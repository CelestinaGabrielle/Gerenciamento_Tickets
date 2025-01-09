"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import LoginForm from "../../components/Forms/LoginForm";
import styles from "../../components/Forms/Login.module.css";
import Logo from "../../img/logo.png";

const Login: React.FC = () => {
  const router = useRouter();

  const handleValidSubmit = () => {
    router.push("/"); // Redireciona para a página principal
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
