import React, { useState } from 'react';
import './App.css';

function Heart({ colorScheme }) {
  const getHeartGradient = () => {
    switch(colorScheme) {
      case 'pink':
        return { from: '#ff69b4', to: '#ff1493' };
      case 'rose':
        return { from: '#e91e63', to: '#c2185b' };
      case 'coral':
        return { from: '#ff6b6b', to: '#ff5252' };
      case 'purple':
        return { from: '#9c27b0', to: '#7b1fa2' };
      case 'blue':
        return { from: '#2196f3', to: '#1976d2' };
      case 'teal':
        return { from: '#00bcd4', to: '#0097a7' };
      case 'deepRose':
        return { from: '#d81b60', to: '#ad1457' };
      case 'softPink':
        return { from: '#f8bbd9', to: '#f48fb1' };
      case 'magenta':
        return { from: '#e91e63', to: '#c2185b' };
      case 'peach':
        return { from: '#ffab91', to: '#ff8a65' };
      case 'lavender':
        return { from: '#e1bee7', to: '#ce93d8' };
      case 'warmCoral':
        return { from: '#ff7043', to: '#ff5722' };
      case 'softPurple':
        return { from: '#ba68c8', to: '#ab47bc' };
      case 'roseGold':
        return { from: '#f8bbd9', to: '#f48fb1' };
      case 'deepCoral':
        return { from: '#ff5252', to: '#d32f2f' };
      case 'darkPink':
        return { from: '#e91e63', to: '#c2185b' };
      case 'red':
        return { from: '#f44336', to: '#d32f2f' };
      default:
        return { from: '#e91e63', to: '#c2185b' };
    }
  };

  const gradient = getHeartGradient();

  return (
    <div className="heart-container">
      <svg 
        className="heart-svg" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: gradient.from, stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: gradient.to, stopOpacity: 1}} />
          </linearGradient>
        </defs>
        <path
          d="M50 88.9c-1.1 0-2.1-0.4-2.9-1.1C25.5 67.5 15 55.9 15 42.5c0-12.8 9.2-22 22-22 6.3 0 12.3 3.1 16.2 8.3 0.4 0.5 0.9 0.8 1.4 0.8s1-0.3 1.4-0.8c3.9-5.2 9.9-8.3 16.2-8.3 12.8 0 22 9.2 22 22 0 13.4-10.5 25-32.1 45.3-0.8 0.7-1.8 1.1-2.9 1.1z"
          fill="url(#heartGradient)"
          stroke={gradient.to}
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

function LockPage({ onBack }) {
  const [code, setCode] = useState('');
  const [showImage, setShowImage] = useState(false);

  const handleNumberClick = (number) => {
    if (code.length < 4) {
      const newCode = code + number;
      setCode(newCode);
      
      if (newCode.length === 4) {
        // Check if code is correct (you can change this to any 4-digit code)
        if (newCode === '1806') { // Anniversary code: 1806
          setShowImage(true);
        } else {
          setCode('');
          alert('Incorrect code! Try again.');
        }
      }
    }
  };

  const handleClear = () => {
    setCode('');
  };

  const handleBackspace = () => {
    setCode(code.slice(0, -1));
  };

  if (showImage) {
    return (
      <div className="menu-page">
        <div className="menu-header">
          <h1 className="menu-title">Menu of Our Love</h1>
          <div className="menu-subtitle">
            <span className="heart-icon">❤️</span>
            Together Forever
            <span className="heart-icon">❤️</span>
          </div>
        </div>
        
        <div className="menu-grid">
          <div className="menu-card">
            <div className="card-icon">📷</div>
            <h3 className="card-title">Our Memories ❤️</h3>
            <p className="card-description">Every precious moment with you</p>
            <div className="card-heart">💕</div>
          </div>
          
          <div className="menu-card">
            <div className="card-icon">🎁</div>
            <h3 className="card-title">Love Calendar ❤️</h3>
            <p className="card-description">Counting days of our love story</p>
            <div className="card-heart">💕</div>
          </div>
          
          <div className="menu-card">
            <div className="card-icon">🧩</div>
            <h3 className="card-title">Love Puzzle ❤️</h3>
            <p className="card-description">Pieces of our journey together</p>
            <div className="card-heart">💕</div>
          </div>
          
          <div className="menu-card">
            <div className="card-icon">💌</div>
            <h3 className="card-title">Love Notes ❤️</h3>
            <p className="card-description">Sweet messages from the heart</p>
            <div className="card-heart">💕</div>
          </div>
        </div>
        
        <button className="back-button menu-back-button" onClick={onBack}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="lock-page">
      <div className="image-section">
        <div className="couple-image">
          <div className="image-placeholder">
            <div className="image-text">Aiden & Lu</div>
            <div className="image-subtext">Your beautiful photo here</div>
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="bow-icon">🎀</div>
        <h1 className="lock-title">Anniversary's Lock</h1>
        <p className="lock-question">What is the anniversary date?</p>
        
        <div className="code-input">
          <div className="lock-icon">🔒</div>
          <div className="code-display">
            {code.split('').map((digit, index) => (
              <span key={index} className="code-digit">*</span>
            ))}
            {Array.from({ length: 4 - code.length }).map((_, index) => (
              <span key={`empty-${index}`} className="code-digit empty">*</span>
            ))}
          </div>
        </div>

        <div className="keypad">
          <div className="keypad-row">
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
          </div>
          <div className="keypad-row">
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
          </div>
          <div className="keypad-row">
            <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
          </div>
          <div className="keypad-row">
            <button onClick={handleClear} className="clear-btn">Clear</button>
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={handleBackspace} className="backspace-btn">⌫</button>
          </div>
        </div>

        <button className="back-button" onClick={onBack}>Back to Home</button>
      </div>
    </div>
  );
}

function App() {
  const [colorScheme, setColorScheme] = useState('red');
  const [bgScheme, setBgScheme] = useState('rose');
  const [showLockPage, setShowLockPage] = useState(false);

  const colorOptions = [
    { name: 'darkPink', label: 'Dark Pink', color: '#e91e63' },
    { name: 'red', label: 'Red', color: '#f44336' },
    { name: 'softPink', label: 'Soft Pink', color: '#f8bbd9' },
    { name: 'roseGold', label: 'Rose Gold', color: '#f8bbd9' },
    { name: 'magenta', label: 'Magenta', color: '#e91e63' },
    { name: 'deepRose', label: 'Deep Rose', color: '#d81b60' }

  ];

  const bgOptions = [
    { name: 'purple', label: 'Purple Dream', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { name: 'pink', label: 'Pink Sunset', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)' },
    { name: 'rose', label: 'Rose Garden', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { name: 'peach', label: 'Peach Blossom', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
    { name: 'lavender', label: 'Lavender Mist', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
    { name: 'sunset', label: 'Sweet Sunset', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 50%, #ffd1ff 100%)' }
  ];

  const getBackgroundStyle = () => {
    const selectedBg = bgOptions.find(bg => bg.name === bgScheme);
    return { background: selectedBg ? selectedBg.gradient : bgOptions[0].gradient };
  };

  if (showLockPage) {
    return <LockPage onBack={() => setShowLockPage(false)} />;
  }

  return (
    <div className="App" style={getBackgroundStyle()}>
      <div className="anniversary-container">
        <Heart colorScheme={colorScheme} />
        
        <div className="content">
          <h1 className="anniversary-title">Welcome to Aiden and Lu's world</h1>
          <button className="start-button" onClick={() => setShowLockPage(true)}>Start!</button>
        </div>
      </div>
      
      {/* Heart Color picker */}
      <div className="color-picker heart-color-picker">
        <div className="color-picker-label">Heart Color:</div>
        <div className="color-options">
          {colorOptions.map((option) => (
            <button
              key={option.name}
              className={`color-option ${colorScheme === option.name ? 'active' : ''}`}
              style={{ backgroundColor: option.color }}
              onClick={() => setColorScheme(option.name)}
              title={option.label}
            />
          ))}
        </div>
      </div>

      {/* Background Color picker */}
      <div className="color-picker bg-color-picker">
        <div className="color-picker-label">Background:</div>
        <div className="color-options">
          {bgOptions.map((option) => (
            <button
              key={option.name}
              className={`color-option ${bgScheme === option.name ? 'active' : ''}`}
              style={{ background: option.gradient }}
              onClick={() => setBgScheme(option.name)}
              title={option.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
