import React from 'react';
import './App.scss';
import { PresentationInfo } from './components/presentationInfo/PresentationInfo';
import { ProfesionalInfo } from './components/professionalInfo/ProfesionalInfo';

function App() {
  return (
    <div className='App'>
      <PresentationInfo />
      <ProfesionalInfo />
    </div>
  );
}

export default App;
