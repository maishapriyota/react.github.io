import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ openChatbox  }) {
  
  return (
    
    <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* Call handleContactClick when Contact link is clicked */}
        <li><a href="/chatbot" onClick={openChatbox}>Contact</a></li>
      </ul>
      </nav>
  );
}

export default Navigation;
