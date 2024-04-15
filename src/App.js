import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './pages/navigation';
import Home from './pages/home';
import About from './pages/about';
import Chatbot from './pages/chatbot'; // Assuming this is the correct path to your Chatbot component

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  // Function to open the chatbox
  const openChatbot = () => {
    setShowChatbot(true);
  };
  
  return (
    <Router>
      <Navigation openChatbot={openChatbot} />
      <Routes>
        <Route path="/reactweb" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Pass props to the Chatbot component */}
        <Route path="/chatbot" element={<Chatbot showChatbot={showChatbot} setShowChatbot={setShowChatbot} />} />
      </Routes>
    </Router>
  );
}

export default App;
