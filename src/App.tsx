import React from 'react';
import logo from './logo.svg';
import './stylesheets/App.scss';
import './components/AXButton';
import { AXButton, type } from './components/AXButton';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <AXButton type={type.primary} onClick={returnFalse}>Primary stess test with longer text</AXButton>
          <AXButton type={type.secondary} onClick={returnFalse}>Secondary</AXButton>
          <AXButton type={type.tertiary} onClick={returnFalse}>Tertiary</AXButton>
          <AXButton type={type.success} onClick={returnFalse}>Success</AXButton>
          <AXButton type={type.info} onClick={returnFalse}>Info</AXButton>
          <AXButton type={type.warning} onClick={returnFalse}>Warning</AXButton>
          <AXButton type={type.danger} onClick={returnFalse}>Danger</AXButton>
          <AXButton type={type.link} onClick={returnFalse}>Link</AXButton>
        </p>
      </header>
      <p>
        <AXButton type={type.primary} onClick={returnFalse}>Primary</AXButton>
        <AXButton type={type.secondary} onClick={returnFalse}>Secondary</AXButton>
        <AXButton type={type.tertiary} onClick={returnFalse}>Tertiary</AXButton>
        <AXButton type={type.success} onClick={returnFalse}>Success</AXButton>
        <AXButton type={type.info} onClick={returnFalse}>Info</AXButton>
        <AXButton type={type.warning} onClick={returnFalse}>Warning</AXButton>
        <AXButton type={type.danger} onClick={returnFalse}>Danger</AXButton>
        <AXButton type={type.link} onClick={returnFalse}>Link</AXButton>
      </p>
    </div>
  );

  function presentAlert() {
    alert("Hey now!")
  }

  function returnFalse() {
    return false;
  }
}

export default App;
