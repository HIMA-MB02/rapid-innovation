import React from 'react';
import DownloadSampleCard from '../DownloadSampleCard/DownloadSampleCard';

const DownloadSampleSection = () => {
  return (
    <div className='container section'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-6'>
          <div className="container">
            <DownloadSampleCard />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='container'>
            <div className='row'>
              <h1>The most useful resource</h1>
              <h1 className='text-secondary'>ever created for dev.</h1>
              <p className='text-muted'>
                Using Landkit to build your site means never worring abour
                designing another page or cross-browser compatibility. Our ever
                growing library of components and pre-designed layouts will make
                your life easier.
              </p>
            </div>
            <div className='row mt-2 mb-2'>
              <div className='col-md-6'>
                <p className='mt-2 mb-2 text-secondary'>
                  <i class='fa fa-check-circle mr-1 download-section-icons'></i>Lifetime updates
                </p>
              </div>
              <div className='col-md-6'>
                <p className='mt-2 mb-2 text-secondary'>
                  <i class='fa fa-check-circle mr-1 download-section-icons'></i>Tons of assets
                </p>
              </div>
              <div className='col-md-6'>
                <p className='mt-2 mb-2 text-secondary'>
                  <i class='fa fa-check-circle mr-1 download-section-icons'></i>Tech support
                </p>
              </div>
              <div className='col-md-6 text-secondary'>
                <p className='mt-2 mb-2 text-secondary'>
                  <i class='fa fa-check-circle mr-1 download-section-icons'></i>Integration ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSampleSection;
