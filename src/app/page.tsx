"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import TicketTable from "../components/Table/TicketTable";
import Sidebar from "../components/sidebar/Sidebar";
import Login from "./login/page";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Checa o estado de autenticação no localStorage
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsAuthenticated(true);
    }
  }, []);

  // Função para simular login
  const handleLogin = () => {
    console.log("Login realizado");
    localStorage.setItem('authToken', 'token_exemplo'); // Salva um token de exemplo
    setIsAuthenticated(true); 
  };

  // Função para simular logout
  const handleLogout = () => {
    console.log("Logout realizado");
    localStorage.removeItem('authToken'); // Remove o token de autenticação
    setIsAuthenticated(false); 
    // Redirecionar para a página de login ou página inicial
    window.location.href = '/login';
  };

  return (
    <>
      {!isAuthenticated ? (
        <div className={styles.Login}>
          <Login onLogin={handleLogin} /> {/* Passa a função onLogin */}
        </div>
      ) : (
        <div className={styles.page}>
          <div className={styles.sidebarWrapper}>
            <Sidebar onLogout={handleLogout} /> {/* Passa a função onLogout */}
          </div>
          <main className={styles.main}>
            <TicketTable />
          </main>
          <footer className={styles.footer}>Meu rodapé</footer>
        </div>
      )}
    </>
  );
}
