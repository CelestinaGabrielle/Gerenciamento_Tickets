import React from "react";
import useTickets from "./useTickets";
import styles from "./TicketTable.module.css";

const TicketTable: React.FC = () => {
  const { tickets, loading, error } = useTickets();

  if (loading) {
    return <p>Carregando dados...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <h1 className={styles.tableTitle}>Lista de Tickets</h1>
      <div className={styles.tableContainer}>
        <table className={styles.ticketTable}>
          <thead>
            <tr>
              <th>#</th>
              <th>Tipo</th>
              <th>Título</th>
              <th>Prioridade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketId}>
                <td>{ticket.ticketId}</td>
                <td>{ticket.type}</td>
                <td>{ticket.title}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.status || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TicketTable;