import React from 'react';
import { InfoSection } from '../molecules/infoSection/InfoSection';

import './profesionalInfo.scss';

export const ProfesionalInfo = () => {
  return (
    <div className='profesional-info'>
      <InfoSection
        sectionTitle={'ME'}
        sectionInfo={`I am a web developer  who has been working with a variety of applications. 
        Specialized in JavaScript and with some front-end frameworks and libraries such as React.js, Redux.js, Meteor.js, Node.js, express.js, media-soup, React-Native and other technologies like CSS, HTML and  HTTPS.
        I truly believe that anyone can be a good mentor regardless of their age or knowledge.
        `}
      />
      <InfoSection
        sectionTitle={'Experience'}
        sectionSubtitle={'Full stack developer and Product Owner'}
        sectionInfo={'Actually at Nearsoft'}
      />

      <InfoSection
        sectionSubtitle={'Front-end mobile developer - Web developer'}
        sectionInfo={'Oct/18/2018- Feb/20/2020'}
      />
      <InfoSection
        sectionSubtitle={'Front-end web developer - Front-end mobile develope'}
        sectionInfo={'Jun/18/2018 - Oct/18/2018'}
      />
      <InfoSection
        sectionSubtitle={'Front-end web developer - Front-end mobile developer'}
        sectionInfo={'Mar/17/2017- Jun/18/2018'}
      />

      <InfoSection
        sectionTitle={'Education'}
        sectionSubtitle={'Engineering in software development'}
        sectionInfo={'Finished'}
      />
      <InfoSection
        sectionSubtitle={
          'Bachelor in business administration with a speciality in tourism'
        }
        sectionInfo={'Finished'}
      />
    </div>
  );
};