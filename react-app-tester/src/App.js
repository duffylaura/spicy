// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  // function MessageButton() {
    const [showMessage, setShowMessage] = useState(false);
  
    function handleClick() {
      setShowMessage(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show message</button>
        {showMessage && <p>Hello, world!</p>}
      </div>
    );
  }
// }

export default App;
