import React from 'react';
import {
  ClientsSection,
  DownloadSampleSection,
  ExperienceSection,
  WelcomeSection,
} from '../../components';

const PagesPage = () => {
  return (
    <>
      <hr />
      <div className='container-fluid' id='clients-section'>
        <ClientsSection />
      </div>
      <hr />
      <div className='container-fluid' id='welcome-section'>
        <WelcomeSection />
      </div>
      <div className='container-fluid' id='download-sample-section'>
        <ExperienceSection />
      </div>
      <div className='container-fluid' id='download-sample-section'>
        <DownloadSampleSection />
      </div>
    </>
  );
};

export default PagesPage;
