import React from 'react';
import {
  ExperienceSection,
  WelcomeSection,
} from '../../components';

const DocumentationPage = () => {
  return (
    <>
        <div className='container-fluid' id='download-sample-section'>
        <ExperienceSection />
          </div>
          <div className='container-fluid' id='welcome-section'>
        <WelcomeSection />
      </div>
    </>
  );
};

export default DocumentationPage;
