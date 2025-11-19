import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { CodeDemo } from './components/CodeDemo';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialChatMsg, setInitialChatMsg] = useState('');

  const handleOpenChat = (msg?: string) => {
    if (msg) setInitialChatMsg(msg);
    setIsChatOpen(true);
  };

  return (
    <div className="bg-[#030014] min-h-screen text-slate-200 selection:bg-indigo-500/30 selection:text-white relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          
          {/* Vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#030014]/90" />
      </div>

      <div className="relative z-10">
        <Navbar onOpenChat={() => handleOpenChat()} />
        <main>
          <Hero onOpenChat={handleOpenChat} />
          <LogoTicker />
          <Services />
          <CodeDemo />
          <Stats />
          <Portfolio />
          <Process />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <ChatWidget 
          isOpen={isChatOpen} 
          setIsOpen={setIsChatOpen} 
          initialMessage={initialChatMsg}
        />
      </div>
    </div>
  );
};

export default App;