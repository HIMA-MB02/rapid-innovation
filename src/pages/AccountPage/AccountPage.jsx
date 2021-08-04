import React from 'react';
import {
  ClientsSection,
  DownloadSampleSection
} from '../../components';

const AccountPage = () => {
  return (
    <>
      <div className='container-fluid' id='download-sample-section'>
        <DownloadSampleSection />
      </div>
      <hr />
      <div className='container-fluid' id='clients-section'>
        <ClientsSection />
      </div>
      <hr />
    </>
  );
};

export default AccountPage;
