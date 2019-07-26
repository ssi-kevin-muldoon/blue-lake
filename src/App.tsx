import React from 'react';
import logo from './logo.svg';
import './stylesheets/App.scss';
import './components/AXButton';
import { AXButton, type } from './components/AXButton';
import 'axiom-ui-icons/font/iconfont.css';

function App() {

  const iconUpload = <i className="axiom-icon icon-upload" />;
  const disabled = false;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <i className="axiom-icon icon-chevron-right" />
        <p>
          <AXButton type={type.primary} onClick={returnFalse} icon_left={iconUpload} disabled={disabled}>Primary stess test with longer text</AXButton>
          <AXButton type={type.secondary} onClick={returnFalse} icon_left={iconUpload} disabled={disabled}>Secondary with a lot of text here</AXButton>           
          <AXButton type={type.tertiary} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Tertiary with extra text here</AXButton>
          <AXButton type={type.success} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Success stess test with longer text</AXButton>
          <AXButton type={type.info} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Info stess test with longer text</AXButton>
          <AXButton type={type.warning} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Warning stess test with longer text</AXButton>
          <AXButton type={type.danger} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Danger stess test with longer text</AXButton>
          <AXButton type={type.link} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Link stess test with longer text</AXButton>
        </p>
      </header>
      <p>
        <AXButton type={type.primary} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Primary stess test with longer text</AXButton>
        <AXButton type={type.secondary} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Secondary stess test with longer text</AXButton>
        <AXButton type={type.tertiary} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Tertiary stess test with longer text</AXButton>
        <AXButton type={type.success} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Success stess test with longer text</AXButton>
        <AXButton type={type.info} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Info stess test with longer text</AXButton>
        <AXButton type={type.warning} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Warning stess test with longer text</AXButton>
        <AXButton type={type.danger} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Danger stess test with longer text</AXButton>
        <AXButton type={type.link} onClick={returnFalse} icon_left={iconUpload}  disabled={disabled}>Link </AXButton>
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
