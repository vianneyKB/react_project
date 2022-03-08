import React, { useState, useEffect } from 'react';
import getData from './util/util';
// import logo from './logo.svg';
import './App.css';
import Work from './pages/work/work';
import Home from './pages/home/home';

function App() {

  // const max = 9;
  // // use State  for Images
  // const [images, setImages] = useState([]);
  // const [limit, setLimit] = useState(9);

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