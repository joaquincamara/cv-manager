import React from 'react';
import personalLogo from '../../../assets/alchemist_icon.svg';

import './personalPhrase.scss';

export const PersonalPhrase = () => {
  return (
    <div className='personal-phrase'>
      <img src={personalLogo} alt='Personal-logo' />
      <p>CONQUERING MY TRUTH</p>
    </div>
  );
};
