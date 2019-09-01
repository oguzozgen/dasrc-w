import React from 'react';
import LayoutCont from './containers/layoutCont/layoutCont';
import HeadPresentCont from './containers/headPresentCont/headPresentCont';
import './App.scss';

function App() {
  return (
    <LayoutCont>
       <HeadPresentCont></HeadPresentCont>
    </LayoutCont>
  );
}

export default App;
