import React from 'react';
import './App.scss';
import { PresentationInfo } from './components/presentationInfo/PresentationInfo';
import { ProfesionalInfo } from './components/professionalInfo/ProfesionalInfo';
import { SkillsInfo } from './components/skillsInfo/SkillsInfo';

function App() {
  return (
    <div className='App'>
      <PresentationInfo />
      <ProfesionalInfo />
      <SkillsInfo />
    </div>
  );
}

export default App;
