import { useState, useEffect } from "react";
import { createPaste, checkHealth } from "../services/api";
import HealthStatus from "../components/HealthStatus";

export default function CreatePaste() {
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [health, setHealth] = useState(null);

  useEffect(() => {
    checkHealth()
      .then((data) => setHealth(data.ok))
      .catch(() => setHealth(false));
  }, []);

  async function submit() {
    const data = await createPaste({ content });
    setUrl(`/p/${data.id}`);
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      {health !== null && <HealthStatus ok={health} />}

      <textarea
        className="w-full border p-2 mt-3"
        rows="8"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        className="mt-4 bg-black text-white px-4 py-2"
        onClick={submit}
      >
        Create Paste
      </button>

      {url && (
        <p className="mt-4">
          Share:{" "}
          <a className="text-blue-600" href={url}>
            {window.location.origin + url}
          </a>
        </p>
      )}
    </div>
  );
}
