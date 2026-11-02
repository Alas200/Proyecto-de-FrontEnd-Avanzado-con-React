import { useState } from 'react';

export function useOllama() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessageToOllama = async (prompt) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-r1:1.5b", // O el tag exacto del modelo ligero que descargaste en Ollama
          prompt: prompt,
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al conectar con el servidor de Ollama");
      }

      const data = await response.json();
      return data.response;
    } catch (err) {
      console.error(err);
      setError("No se pudo obtener una respuesta de la IA local.");
      return "Lo siento, ocurrió un error al procesar tu solicitud con Ollama.";
    } finally {
      setLoading(false);
    }
  };

  return { sendMessageToOllama, loading, error };
}