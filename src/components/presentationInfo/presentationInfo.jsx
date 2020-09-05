import React from 'react';
import { MailFilled, GithubFilled } from '@ant-design/icons';

import './presentationInfo.scss';

export const PresentationInfo = () => {
  return (
    <div className='presentation-info'>
      <div className='presentation-info__name-info'>
        <h1>JOAQUIN</h1>
        <h1>CAMARA</h1>
        <p className='presentation-info__name-info__cv-text'>
          CURRICULUM VITAE
        </p>
      </div>

      <div className='presentation-info__contact-info'>
        <div className='presentation-info__contact-info__info-text'>
          <MailFilled />
          <p>joaquin_camara@outlook.com</p>
        </div>
        <div className='presentation-info__contact-info__info-text'>
          <GithubFilled />
          <p>@joaquincamara</p>
        </div>
      </div>
    </div>
  );
};
