"use client";
import React, { useState } from "react";
import styles from "./Login.module.css";

interface LoginFormProps {
  onValidSubmit: () => void; // Função para redirecionamento
}

const LoginForm: React.FC<LoginFormProps> = ({ onValidSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validateForm = () => {
    const newErrors = { username: "", password: "" };

    if (!username) newErrors.username = "O campo Usuário é obrigatório.";
    if (!password) newErrors.password = "O campo Senha é obrigatório.";
    else if (password.length < 6)
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";

    setErrors(newErrors);
    return !newErrors.username && !newErrors.password;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onValidSubmit(); // Chama a função passada via props
      setUsername("");
      setPassword("");
      setErrors({ username: "", password: "" });
    }
  };

  return (
    <div className={styles.card}>
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
          <div className={styles.passwordWrapper}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? styles.errorInput : ""}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.togglePassword}
            >
              {showPassword ? "🕶" : "👀"}
            </button>
          </div>
          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </div>

        <button className={styles.button} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
