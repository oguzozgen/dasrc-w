import React from 'react'
import LayoutCont from './containers/layoutCont/LayoutCont'
import { Routes } from './routes/route';
import './App.scss';

function App() {
  return (
    <LayoutCont>
      <Routes />
    </LayoutCont>
  );
}

export default App;
