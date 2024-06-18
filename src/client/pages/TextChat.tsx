"use client"
import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Message {
  user: string;
  text: string;
}

const TextChat: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { user: 'User 1', text: 'Hello!' },
    { user: 'User 2', text: 'Hi there!' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const currentUser = 'User 1'; // Simulate current user

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { user: currentUser, text: inputMessage }]);
      setInputMessage('');
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
        <Head>
          <title>Chat App - Text Only Chat</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="bg-blue-600 dark:bg-gray-800 text-white p-4 flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a className="text-xl">Chat App</a>
          </Link>
          <nav className="flex space-x-4">
            <button onClick={toggleDarkMode} className="hover:underline">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>
        </header>

        <div className="flex flex-grow flex-col">
          <div ref={chatContainerRef} className="flex-grow overflow-y-auto bg-white dark:bg-gray-800 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg max-w-xs break-words whitespace-pre-wrap ${message.user === currentUser ? 'bg-blue-100 dark:bg-blue-800 self-end ml-auto' : 'bg-gray-200 dark:bg-gray-700 self-start mr-auto'
                  }`}
                style={{
                  textAlign: message.user === currentUser ? 'right' : 'left',
                }}
              >
                <span className="font-bold">{message.user}:</span> {message.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-gray-800 fixed bottom-0 w-full">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-grow border border-gray-300 dark:border-gray-600 p-2 rounded-l bg-white dark:bg-gray-700 text-black dark:text-white"
              placeholder="Type a message..."
              rows={2}
            />
            <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextChat;
