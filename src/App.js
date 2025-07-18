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
      default:
        return { from: '#d81b60', to: '#ad1457' };
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

function App() {
  const [colorScheme, setColorScheme] = useState('deepRose');
  const [bgScheme, setBgScheme] = useState('sunset');

  const colorOptions = [
    { name: 'deepRose', label: 'Deep Rose', color: '#d81b60' },
    { name: 'softPink', label: 'Soft Pink', color: '#f8bbd9' },
    { name: 'magenta', label: 'Magenta', color: '#e91e63' },
    { name: 'peach', label: 'Peach', color: '#ffab91' },
    { name: 'warmCoral', label: 'Warm Coral', color: '#ff7043' },
    { name: 'deepCoral', label: 'Deep Coral', color: '#ff5252' },
    { name: 'lavender', label: 'Lavender', color: '#e1bee7' },
    { name: 'softPurple', label: 'Soft Purple', color: '#ba68c8' },
    { name: 'roseGold', label: 'Rose Gold', color: '#f8bbd9' },
    { name: 'purple', label: 'Purple', color: '#9c27b0' },
    { name: 'blue', label: 'Blue', color: '#2196f3' },
    { name: 'teal', label: 'Teal', color: '#00bcd4' }
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

  return (
    <div className="App" style={getBackgroundStyle()}>
      <div className="anniversary-container">
        <Heart colorScheme={colorScheme} />
        
        <div className="content">
          <h1 className="anniversary-title">Welcome to Aiden and Lu's world</h1>
          <button className="start-button">Start!</button>
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
