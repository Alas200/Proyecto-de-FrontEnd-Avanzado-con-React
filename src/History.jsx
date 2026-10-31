import { NewChatIcon } from "./assets/new-chat-icon.jsx";
export default function History() {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-900 text-white p-4 border-r border-gray-800">
      <div className="flex flex-col items-start">
        <span className="mb-4 font-bold text-lg">DevfSeek</span>
        <div className="p-1 mt-4 w-full">
          <button className="flex items-center gap-2 p-2 bg-blue-600 hover:bg-blue-700 rounded-lg w-full transition-colors cursor-pointer text-sm">
            <NewChatIcon />
            Nuevo chat
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto mt-4 mb-4">
        <ul className="space-y-2 text-sm mt-4 text-gray-300">
          <li className="p-2 hover:bg-gray-800 rounded cursor-pointer">Búsqueda avanzada</li>
          <li className="p-2 hover:bg-gray-800 rounded cursor-pointer">¿Qué es React?</li>
          <li className="p-2 hover:bg-gray-800 rounded cursor-pointer">¿Qué es un componente?</li>
          <li className="p-2 hover:bg-gray-800 rounded cursor-pointer">¿Qué es un hook?</li>
          <li className="p-2 hover:bg-gray-800 rounded cursor-pointer">¿Qué es un estado?</li>
          <li className="p-2 hover:bg-gray-800 rounded cursor-pointer">¿Qué es un prop?</li>
          <li className="p-2 hover:bg-gray-800 rounded cursor-pointer">¿Qué es un evento?</li>
          <li className="p-2 hover:bg-gray-800 rounded cursor-pointer">¿Qué es un ciclo de vida?</li>
        </ul>
      </div>
    </div>
  );
}