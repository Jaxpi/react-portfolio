import './App.css';
import React from 'react';
import header from './components/header';
import footer from './components/footer';
import navigation from './components/navigation';
import project from './components/project';

function App() {
  return (
    <div className="App">
      <header />;
      <navigation />;
      <project />;
      <footer />;
    </div>
  );
}

export default App;