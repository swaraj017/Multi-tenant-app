import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Sidebar() {
  const [screens, setScreens] = useState([]);

  useEffect(() => {
    API.get("/me/screens").then(res => setScreens(res.data));
  }, []);

  return (
    <aside>
      <h3>Sidebar</h3>
      <ul>
        {screens.map(s => (
          <li key={s.screenUrl}><a href={s.screenUrl}>{s.tenant}</a></li>
        ))}
      </ul>
    </aside>
  );
}
