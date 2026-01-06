import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPaste } from "../services/api";

export default function ViewPaste() {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    getPaste(id).then((data) => setContent(data.content));
  }, [id]);

  return (
    <pre className="p-6 whitespace-pre-wrap">{content}</pre>
  );
}
