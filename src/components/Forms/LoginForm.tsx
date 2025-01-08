"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "../Forms/Login.module.css";

const LoginForm: React.FC = () => {
  // Estados para armazenar os valores dos campos e os erros
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  // Função de validação
  const validateForm = () => {
    const newErrors = { username: "", password: "" };

    if (!username) newErrors.username = "O campo Usuário é obrigatório.";
    if (!password) newErrors.password = "O campo Senha é obrigatório.";
    else if (password.length < 6)
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";

    setErrors(newErrors);

    // Retorna true se não houver erros
    return !newErrors.username && !newErrors.password;
  };

  // Função de envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("VOCE ENTROU!");
      /*  router.push('/');*/
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Usuário</label>
          <input
            id="username"
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={errors.username ? styles.errorInput : ""}
          />
          {errors.username && (
            <span className={styles.error}>{errors.username}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? styles.errorInput : ""}
          />
          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </div>

        <button className={styles.button} type="submit">
          Entrar
        </button>
      </form>

      <p className={styles.link}>
        Esqueceu a senha? <a href="#">Recuperar</a>
      </p>
    </div>
  );
};

export default LoginForm;
