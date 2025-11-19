import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, Eraser } from 'lucide-react';
import { ChatMessage } from '../types';
import { streamChatResponse } from '../services/geminiService';
import { Content, GenerateContentResponse } from '@google/genai';

const SUGGESTED_PROMPTS = [
    "Estimated cost for an app?",
    "Do you build React Native?",
    "What is your tech stack?",
    "How long does it take?"
];

interface ChatWidgetProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  initialMessage?: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, setIsOpen, initialMessage }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I\'m TriBot. I can help estimate costs, explain our process, or discuss tech stacks. What\'s on your mind?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatHistoryRef = useRef<Content[]>([]);
  const hasInitialized = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Handle initial message from props (e.g. from Hero command bar)
  useEffect(() => {
    if (isOpen && initialMessage && !isLoading && !hasInitialized.current) {
       hasInitialized.current = true;
       handleSend(initialMessage);
    }
  }, [isOpen, initialMessage]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const newMessages: ChatMessage[] = [
        ...messages, 
        { role: 'user', text: textToSend }
    ];
    setMessages(newMessages);
    setIsLoading(true);
    setInput('');

    try {
      const placeholderIndex = newMessages.length;
      setMessages(prev => [...prev, { role: 'model', text: '', isStreaming: true }]);

      const streamResult = await streamChatResponse(chatHistoryRef.current, textToSend);
      
      let fullResponseText = '';

      for await (const chunk of streamResult) {
         const c = chunk as GenerateContentResponse;
         if (c.text) {
             fullResponseText += c.text;
             setMessages(prev => {
                 const updated = [...prev];
                 updated[placeholderIndex] = { role: 'model', text: fullResponseText, isStreaming: true };
                 return updated;
             });
         }
      }

      setMessages(prev => {
        const updated = [...prev];
        updated[placeholderIndex] = { role: 'model', text: fullResponseText, isStreaming: false };
        return updated;
      });

      chatHistoryRef.current.push({ role: 'user', parts: [{ text: textToSend }] });
      chatHistoryRef.current.push({ role: 'model', parts: [{ text: fullResponseText }] });

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the server right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
      setMessages([{ role: 'model', text: 'Chat cleared. How can I help you now?' }]);
      chatHistoryRef.current = [];
      hasInitialized.current = false;
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-lg shadow-2xl shadow-indigo-500/30 transition-all duration-300 hover:scale-105 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-white text-black'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[95vw] sm:w-[400px] h-[600px] max-h-[80vh] glass-panel rounded-lg shadow-2xl animate-fade-in-up overflow-hidden flex flex-col border border-white/10 ring-1 ring-white/5">
          
          {/* Header */}
          <div className="bg-[#0f0c29]/95 p-4 border-b border-white/10 flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-white font-bold text-sm tracking-wide">TriBot AI</h3>
                    <p className="text-[10px] text-indigo-300 flex items-center gap-1 uppercase font-mono">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> System Active
                    </p>
                </div>
            </div>
            <button onClick={clearChat} className="text-slate-500 hover:text-white transition-colors p-1 rounded hover:bg-white/5" title="Clear Chat">
                <Eraser className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#030014]/90 scroll-smooth">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed shadow-md ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-none'
                      : 'bg-[#1e1b2e] text-slate-200 border border-white/5 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                  {msg.isStreaming && <span className="inline-block w-1.5 h-4 ml-1 bg-indigo-400 align-middle animate-pulse"></span>}
                </div>
              </div>
            ))}
             {isLoading && messages[messages.length-1]?.role === 'user' && (
                 <div className="flex justify-start">
                     <div className="bg-[#1e1b2e] rounded-lg rounded-bl-none px-4 py-3 border border-white/5">
                        <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                     </div>
                 </div>
             )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {!isLoading && messages.length < 4 && (
              <div className="px-4 py-2 bg-[#030014]/90 flex gap-2 overflow-x-auto no-scrollbar">
                  {SUGGESTED_PROMPTS.map((prompt, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleSend(prompt)}
                        className="flex-shrink-0 text-xs bg-white/5 hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/50 text-slate-300 hover:text-indigo-200 px-3 py-1.5 rounded transition-all whitespace-nowrap"
                      >
                          {prompt}
                      </button>
                  ))}
              </div>
          )}

          {/* Input Area */}
          <form onSubmit={(e) => { e.preventDefault(); handleSend(input); }} className="p-3 bg-[#0f0c29] border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-3 bg-white text-black hover:bg-indigo-50 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-95 font-bold"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};