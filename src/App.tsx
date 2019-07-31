import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './components/AXButton';
import { type } from './components/AXBase';
import { AXButton } from './components/AXButton';
import BXButton from './components/BXButton';

import 'axiom-ui-icons/font/iconfont.css';

function App() {

  const iconUpload = <i className="axiom-icon icon-upload" />;
  const disabled = false;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <BXButton type={type.primary} icon={iconUpload} onClick={returnFalse}>OK</BXButton>
          <BXButton type={type.primary} icon={iconUpload} onClick={returnFalse}></BXButton>
          <BXButton type={type.primary} icon={iconUpload} iconTrailing={iconUpload} onClick={returnFalse}></BXButton>
          <BXButton type={type.secondary} icon={iconUpload} iconTrailing={iconUpload} disabled={disabled} onClick={returnFalse}>OK</BXButton>           
          <BXButton type={type.tertiary} disabled={disabled} onClick={returnFalse}>OK</BXButton>
          <BXButton type={type.success} icon={iconUpload} disabled={disabled} onClick={returnFalse}>OK</BXButton>
          <BXButton type={type.info} icon={iconUpload} disabled={disabled} onClick={returnFalse}>OK</BXButton>
          <BXButton type={type.warning} icon={iconUpload} disabled={disabled} onClick={returnFalse}>OK</BXButton>
          <BXButton type={type.danger} icon={iconUpload} disabled={disabled} onClick={returnFalse}>OK</BXButton>
          <BXButton type={type.link} disabled={disabled} onClick={returnFalse}>OK</BXButton>
        </p>
      </header>
      <p>
          <AXButton type={type.primary} onClick={returnFalse} icon={iconUpload} disabled={disabled}>Primary</AXButton>
          <AXButton type={type.secondary} onClick={returnFalse} icon={iconUpload} iconTrailing={iconUpload} disabled={disabled}>Secondary with a lot of text here</AXButton>           
          <AXButton type={type.tertiary} onClick={returnFalse} disabled={disabled}>Tertiary with extra text here</AXButton>
          <AXButton type={type.success} onClick={returnFalse} icon={iconUpload} disabled={disabled}>Success stess test with longer text</AXButton>
          <AXButton type={type.info} onClick={returnFalse} icon={iconUpload} disabled={disabled}>Info stess test with longer text</AXButton>
          <AXButton type={type.warning} onClick={returnFalse} icon={iconUpload} disabled={disabled}>Warning stess test with longer text</AXButton>
          <AXButton type={type.danger} onClick={returnFalse} icon={iconUpload} disabled={disabled}>Danger stess test with longer text</AXButton>
          <AXButton type={type.link} onClick={returnFalse} disabled={disabled}>Link stess test with longer text</AXButton>
        </p>
     
       <p>
        <AXButton type={type.primary} onClick={returnFalse} disabled={disabled}>Primary and a word</AXButton>
        <AXButton type={type.secondary} onClick={returnFalse} icon={iconUpload} disabled={disabled}>Secondary with a lot of text here</AXButton>   
        <AXButton type={type.tertiary} onClick={returnFalse}  disabled={disabled}>Tertiary stess test with longer text</AXButton>
        <AXButton type={type.success} onClick={returnFalse} icon={iconUpload} disabled={disabled}>Success stess test with longer text</AXButton>
        <AXButton type={type.info} onClick={returnFalse} icon={iconUpload} disabled={disabled}>Info stess test with longer text</AXButton>
        <AXButton type={type.warning} onClick={returnFalse} icon={iconUpload} disabled={disabled}>Warning stess test with longer text</AXButton>
        <AXButton type={type.danger} onClick={returnFalse} icon={iconUpload} disabled={disabled}>Danger stess test with longer text</AXButton>
        <AXButton type={type.link} onClick={returnFalse} disabled={disabled}>Link</AXButton>
        <AXButton type={type.primary} onClick={returnFalse} icon={iconUpload} disabled={disabled}></AXButton>
      </p>
      <p>
          <AXButton type={type.primary} onClick={returnFalse} iconTrailing={iconUpload} disabled={disabled}>Primary</AXButton>
          <AXButton type={type.secondary} onClick={returnFalse} iconTrailing={iconUpload} disabled={disabled}>Secondary with a lot of text here</AXButton>           
          <AXButton type={type.tertiary} onClick={returnFalse} disabled={disabled}>Tertiary with extra text here</AXButton>
          <AXButton type={type.success} onClick={returnFalse} iconTrailing={iconUpload} disabled={disabled}>Success stess test with longer text</AXButton>
          <AXButton type={type.info} onClick={returnFalse} iconTrailing={iconUpload} disabled={disabled}>Info stess test with longer text</AXButton>
          <AXButton type={type.warning} onClick={returnFalse} iconTrailing={iconUpload} disabled={disabled}>Warning stess test with longer text</AXButton>
          <AXButton type={type.danger} onClick={returnFalse} iconTrailing={iconUpload} disabled={disabled}>Danger stess test with longer text</AXButton>
          <AXButton type={type.link} onClick={returnFalse} disabled={disabled}>Link stess test with longer text</AXButton>
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
