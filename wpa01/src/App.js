import React, { useEffect } from 'react';
import getData from './util/util';
// import logo from './logo.svg';
import './App.css';
import Work from './pages/work/work';
import Home from './pages/home/home';

function App() {

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Home />
      <Work />

    </div>
  );
}

export default App;