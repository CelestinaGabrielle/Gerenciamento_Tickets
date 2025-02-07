import React, { useEffect, useState } from "react";
import styles from "./TicketTable.module.css";

export interface Ticket {
  ticketId: number;
  type: string;
  title: string;
  priority: string;
  status: string;
}

const TicketTable: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ticketData = await getTickets();
        setTickets(ticketData);
      } catch (error) {
        setError("Erro ao carregar tickets. Tente novamente mais tarde.");
        console.error("Erro ao buscar tickets:", error); // Log do erro
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getTickets = async (): Promise<Ticket[]> => {
    const response = await fetch("/api/issue");

    if (!response.ok) {
      throw new Error('Falha ao carregar tickets');
    }

    return response.json();
  };

  if (loading) {
    return <p>Carregando dados...</p>;
  }

  if (error) {
    return <p>{error}</p>;
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
