"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  // Função para simular o logout
  const handleLogout = () => {
    // Limpar o token de autenticação ou dados da sessão
    localStorage.removeItem('authToken'); // Exemplo de remoção de token

    // Redirecionar para a página de login ou página inicial
    router.push('/login');
  };

  // Realizar o logout automaticamente assim que o componente for clicado
  useEffect(() => {
    handleLogout();
  }, []);

  return null; // O componente não precisa renderizar nada
};

export default Logout;
