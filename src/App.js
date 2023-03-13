import logo from './logo.svg';
import './App.css';
import HeaderPortfolio from './components/HeaderPortfolio';
import FooterPortfolio from './components/FooterPortfolio';
import ProjectPortfolio from './components/ProjectPortfolio';
import React, { useState } from 'react';

function App() {

  const [componentToShow, setComponentToShow] = useState(null);

  const showComponent = (component) => {
    console.log('component');
    console.log(component);
    setComponentToShow(component);
  };

  return (
    <div className="App">
      <HeaderPortfolio showComponent={showComponent} componentToShow={componentToShow} />
      <ProjectPortfolio componentToShow={componentToShow} />
      <FooterPortfolio/>
    </div>
  );
}

export default App;
