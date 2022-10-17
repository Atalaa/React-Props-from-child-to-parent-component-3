import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function Child({ handleColor, newColor }) {

  return (
    <div className="child">
      <input
        type="text"
        id="input"
        value={newColor}
        onChange={handleColor}
      />
    </div>
  );
}
