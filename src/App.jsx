import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";

export default function App() {
  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?", sender: "bot" }
  ]);

  // Configuramos React Hook Form para manejar el input del chat de forma eficiente
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const userMessage = data.message.trim();
    if (!userMessage) return;

    // Agregar mensaje del usuario
    const newMessages = [...messages, { text: userMessage, sender: "user" }];
    setMessages(newMessages);
    reset();

    // Simular respuesta del bot después de 1 segundo (como indica el README de referencia)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Esta es una respuesta simulada del modelo de IA.", sender: "bot" }
      ]);
    }, 1000);
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
      </div>

      {/* Formulario con React Hook Form y Tailwind */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 bg-gray-950 border-t border-gray-800 flex gap-2 items-center"
      >
        <input
          type="text"
          {...register("message", { required: true })}
          placeholder="Escribe tu mensaje aquí..."
          className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
        >
          <SendHorizontal size={20} />
        </button>
      </form>
    </div>
  );
}