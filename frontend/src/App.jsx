import React, { useState } from "react";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Tickets from "./components/Tickets";

function App() {
  const [user, setUser] = useState(null);
  if (!user) return <Login onLogin={setUser} />;
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: 20 }}>
        <h2>Welcome, {user.name}</h2>
        <Tickets />
      </main>
    </div>
  );
}

export default App;
