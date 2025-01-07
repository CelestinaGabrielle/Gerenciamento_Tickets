import styles from "./page.module.css";
import TicketTable from "../components/Table/TicketTable";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <main className={styles.main}>
        <TicketTable />
      </main>
      <footer className={styles.footer}>Meu rodapé</footer>
    </div>
  );
}
