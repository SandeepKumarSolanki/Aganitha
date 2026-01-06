import { useEffect, useState } from "react";
import { checkHealth } from "../services/api";

export default function Health() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    checkHealth()
      .then(data => setStatus(data.ok ? "Backend OK" : "DB Disconnected"))
      .catch(() => setStatus("Server Down"));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Health Status</h1>
      <p className="mt-2">{status}</p>
    </div>
  );
}
