import React, { useState, useEffect } from 'react';
import '../styles/Loading.scss';

const messages = [
  "Loading your adventure...",
  "Gathering the heroes...",
  "Charting the path...",
  "Unlocking the secrets...",
  "Will you survive?"
];

const Loading: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1000); // Change message every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="loading">
      <div className="overlay">
        <h1>The Adventures Of Dingleberry</h1>
        <div className="spinner"></div>
        <p>{messages[messageIndex]}</p>
      </div>
    </div>
  );
};

export default Loading;
