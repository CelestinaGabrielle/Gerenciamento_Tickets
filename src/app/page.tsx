// page.tsx
import styles from "./page.module.css";
import TicketTable from "../components/table/TicketTable";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Sidebar - Menu lateral */}
      <Sidebar />
      
      <main className={styles.main}>
        <h1>Lista de Tickets</h1>
        <TicketTable /> {/* Tabela de Tickets */}
      </main>
      
      <footer className={styles.footer}>Meu rodapé</footer>
    </div>
  );
}
