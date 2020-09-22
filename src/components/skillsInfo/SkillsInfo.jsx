import React from 'react';
import { InfoSection } from '../molecules/infoSection/InfoSection';

import './skillsInfo.scss';

export const SkillsInfo = () => {
  return (
    <div className='skills-info'>
      <InfoSection
        sectionTitle={'Programming Technologies'}
        technologies={[
          { name: 'Js', rate: 4 },
          { name: 'Css', rate: 4 },
          { name: 'Html', rate: 4 },
          { name: 'Scss', rate: 4 },
          { name: 'C#', rate: 2 },
          { name: 'Node', rate: 4 },
          { name: 'React', rate: 4 },
          { name: 'Graph QL', rate: 3 },
          { name: 'Express', rate: 3 },
          { name: 'Mongo', rate: 3 },
          { name: 'MySql', rate: 3 },
          { name: 'Redux', rate: 4 },
        ]}
      />

      <InfoSection
        sectionTitle={'Cool Features'}
        textList={[
          'Beer Brewer',
          'Sea lover',
          'Sufer',
          'Kite surfer',
          'Camping Lover',
          'Coffe Lover',
          'Dog Lover',
          'Martial Arts lover',
          'Saturdays Morning Game Developer',
          'History Lover',
          'Lord Of The Rings Fan',
          'The Leyend Of Zelda Fan',
          'Full Metal Achemist Fan',
          'Avatar Last air bender fan',
          'Pixel Games Lover',
          'Motor Biker',
        ]}
      />
    </div>
  );
};
