import * as React from "react"
import './App.css';
import { Tldraw } from '@tldraw/tldraw';

function App() {
  
  return (
    <div className="App">
      <Tldraw id='tldraw' />
    </div>
  );
}

export default App;
