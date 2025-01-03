import styles from "./page.module.css";
import TicketTable from "../components/table/TicketTable";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <main className={styles.main}>
        <h1>Lista de Tickets</h1>
        <TicketTable />
      </main>
      <footer className={styles.footer}>Meu rodapé</footer>
    </div>
  );
}
