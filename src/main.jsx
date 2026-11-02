import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import History from './History.jsx';
import { ChatProvider } from './context/ChatContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <div className="grid grid-cols-[auto_1fr] h-screen w-full overflow-hidden">
        <History />
        <App />
      </div>
    </ChatProvider>
  </StrictMode>,
);