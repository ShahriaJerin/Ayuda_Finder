import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Prevent multiple scripts
    if (!document.querySelector('script[src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;
      script.onload = () => {
        if (!document.querySelector('df-messenger')) {
          const dfMessenger = document.createElement('df-messenger');
          dfMessenger.setAttribute('intent', 'WELCOME');
          dfMessenger.setAttribute('chat-title', 'AyudaFinder');
          dfMessenger.setAttribute('agent-id', 'a89922bd-6e42-4bf8-8c93-ea24e79d2a98');
          dfMessenger.setAttribute('language-code', 'en');
          dfMessenger.style.position = 'fixed';
          dfMessenger.style.bottom = '20px';
          dfMessenger.style.right = '20px';
          dfMessenger.style.zIndex = '9999';
          document.body.appendChild(dfMessenger);
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default Chatbot;
