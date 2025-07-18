import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    API.get("/tickets").then(res => setTickets(res.data));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await API.post("/tickets", { subject, description });
    setTickets([...tickets, res.data]);
    setSubject("");
    setDescription("");
  };

  return (
    <div>
      <h3>Tickets</h3>
      <form onSubmit={handleCreate}>
        <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" />
        <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">Create Ticket</button>
      </form>
      <ul>
        {tickets.map(t => (
          <li key={t._id}>{t.subject} - {t.status}</li>
        ))}
      </ul>
    </div>
  );
}
