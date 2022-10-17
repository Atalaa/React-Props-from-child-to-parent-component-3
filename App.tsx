import * as React from 'react';
import { useState } from 'react';
import Child from './Child';
import './style.css';

export default function App() {
  const [color, setColor] = useState('');

  function handleColor(e) {
    setColor(e.target.value);
  }

  return (
    <div>
      <div className="parent" style={{ backgroundColor: `${color}` }}></div>
      <Child newColor={color} handleColor={handleColor} />
    </div>
  );
}
