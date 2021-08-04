import React from 'react';
import './ExperienceSection.css';
import ExperienceImage from '../../assets/img/experience-image.png';

const ExperienceSection = () => {
  return (
    <div className='container section'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 mb-2'>
                <h3>We have lots of experience</h3>
                <h3 className='text-primary'>Building bootstrap themes</h3>
              </div>
              <div className='col-md-12 mb-2'>
                <p className='text-muted'>
                  We have built over a dozen bootstrap themes and sold tens of
                  thousands of copies
                </p>
              </div>
              <div className='col-md-12'>
                <div className='d-flex justif-content-between mt-4'>
                  <div className='mr-2'>
                    <i class='fa fa-recycle fa-3x experience-icon'></i>
                  </div>
                  <div>
                    <p>
                      Bootstrap users since the beginning
                      <br />
                      <span className='text-muted'>
                        We've been developing with bootstrap since it was
                        publicly released in 2011
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='d-flex justif-content-between mt-4'>
                  <div className='mr-2'>
                    <i class='fa fa-code fa-3x experience-icon'></i>
                  </div>
                  <div>
                    <p>
                      Deep understanding of Bootstrap
                      <br />
                      <span className='text-muted'>
                        We've been developing with bootstrap since it was
                        publicly released in 2011
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 d-none d-lg-block'>
          <img
            className='experience-image'
            src={ExperienceImage}
            alt='experience'
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
