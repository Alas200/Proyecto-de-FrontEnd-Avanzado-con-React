import { SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { useOllama } from "./hooks/useOllama";
import { useChat } from "./context/ChatContext";

export default function App() {
  const { state, dispatch } = useChat();
  const { messages } = state;

  const { sendMessageToOllama, loading } = useOllama();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const userMessage = data.message.trim();
    if (!userMessage || loading) return;

    // Agregar mensaje del usuario usando el reducer
    dispatch({ type: 'ADD_MESSAGE', payload: { text: userMessage, sender: "user" } });
    reset();

    // Obtener la respuesta real de Ollama
    const botResponseText = await sendMessageToOllama(userMessage);

    // Agregar la respuesta del bot usando el reducer
    dispatch({ type: 'ADD_MESSAGE', payload: { text: botResponseText, sender: "bot" } });
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-900 text-white justify-between">
      {/* Contenedor de mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-600 self-end text-white"
                : "bg-gray-800 self-start text-gray-200 border border-gray-700"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="bg-gray-800 self-start text-gray-400 px-4 py-2 rounded-lg border border-gray-700 italic">
            Pensando...
          </div>
        )}
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 bg-gray-950 border-t border-gray-800 flex gap-2 items-center"
      >
        <input
          type="text"
          disabled={loading}
          {...register("message", { required: true })}
          placeholder={loading ? "Esperando respuesta de la IA..." : "Escribe tu mensaje aquí..."}
          className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex items-center justify-center cursor-pointer disabled:opacity-50"
        >
          <SendHorizontal size={20} />
        </button>
      </form>
    </div>
  );
}