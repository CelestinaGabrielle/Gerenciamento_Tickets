import React from "react";
import "./TicketTable.css";

const TicketTable = () => {
  const tickets = [
    { id: 1, title: "Erro ao carregar página", priority: "Alta", status: "Em progresso" },
    { id: 2, title: "Ajuste no layout", priority: "Média", status: "Pendente" },
    { id: 3, title: "Correção de bugs no login", priority: "Baixa", status: "Concluída" },
  ];

  return (
    <div className="table-container">
      <table className="ticket-table">
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
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>Bug</td>
              <td>{ticket.title}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
