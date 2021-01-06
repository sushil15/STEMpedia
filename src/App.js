import React from 'react';
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import './style.css';

function App() {
  return (
    <div className="main_div">
      <div className="center_div">
        <CompA/>
        <CompB/>
      </div>
    </div>
  );
}

export default App;
