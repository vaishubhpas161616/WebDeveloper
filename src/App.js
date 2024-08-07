import React from 'react';
import './App.css';
import Sidebar from './Components/Layout/Sidebar';
import MainContent from './Components/Layout/MainContent';


function App() {
  return (
    <div className="app">
    <Sidebar/>
    <MainContent/>
    
</div>
  );
}

export default App;
