import { useEffect, useState } from "react";

export interface Ticket {
  ticketId: number;
  type: string;
  title: string;
  priority: string;
  status: string;
}

const useTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/api/issue");
        if (!response.ok) {
          throw new Error("Falha ao carregar tickets");
        }
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  return { tickets, loading, error };
};

export default useTickets;