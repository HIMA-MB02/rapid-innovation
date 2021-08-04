import React from 'react';
import {
  ClientsSection,
  DownloadSampleSection,
  ExperienceSection,
  WelcomeSection,
} from '../../components';

const LandingPage = () => {
  return (
    <>
      <div className='container-fluid' id='welcome-section'>
        <WelcomeSection />
      </div>
      <hr />
      <div className='container-fluid' id='clients-section'>
        <ClientsSection />
      </div>
      <hr />
      <div className='container-fluid' id='download-sample-section'>
        <DownloadSampleSection />
          </div>
        <div className='container-fluid' id='download-sample-section'>
        <ExperienceSection />
      </div>
    </>
  );
};

export default LandingPage;
