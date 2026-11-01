


import { createContext, useContext, useReducer } from 'react';

const ChatContext = createContext();

// Estado inicial de la aplicación
const initialState = {
  messages: [
    { text: "¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?", sender: "bot" }
  ]
};

// Reducer para gestionar las acciones sobre los mensajes
function chatReducer(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
}

// Proveedor del Contexto
export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}

// Hook personalizado para usar el contexto fácilmente
// eslint-disable-next-line react-refresh/only-export-components
export function useChat() {
  return useContext(ChatContext);
}