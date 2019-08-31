import React from 'react';
import LayoutComp from './components/layoutComp/layoutComp';
import HeadPresentComp from './components/headPresentComp/headPresentComp';
import './App.scss';

function App() {
  return (
    <LayoutComp>
       <HeadPresentComp></HeadPresentComp>
    </LayoutComp>

  );
}

export default App;
