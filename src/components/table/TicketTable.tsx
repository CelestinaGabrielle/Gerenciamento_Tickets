import React, { useEffect, useState } from "react";
import styles from "./TicketTable.module.css";
import { getTickets } from "../../api/TicketApi";
import { getStatuses } from "../../api/GitLabApi";

interface Ticket {
  id: number;
  type: string;
  title: string;
  priority: string;
}

interface GitLabStatus {
  ticketId: number;
  status: string;
}

const TicketTable: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [statusMap, setStatusMap] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      const ticketData = await getTickets();
      console.log("Tickets:", ticketData);
      setTickets(ticketData);

      const statusData = await getStatuses();
      console.log("GitLab Statuses:", statusData);

      const statusMap: { [key: number]: string } = {};
      statusData.forEach((status: GitLabStatus) => {
        statusMap[status.ticketId] = status.status;
      });

      console.log("Status Map:", statusMap);
      setStatusMap(statusMap);
    };

    fetchData();
  }, []);

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
            {tickets.map((ticket) => {
              return (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.type}</td>
                  <td>{ticket.title}</td>
                  <td>{ticket.priority}</td>
                  <td>{statusMap[ticket.id]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TicketTable;
