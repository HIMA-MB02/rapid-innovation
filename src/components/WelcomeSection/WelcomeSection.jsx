import React from 'react';
import './WelcomeSection.css';
import TeamImage from '../../assets/img/team.png';

const WelcomeSection = () => {
  return (
    <div className='container section'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-6'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h1>
                  Welcome to <span className='text-primary'>Landkit.</span>
                </h1>
                <h1>Develop anything.</h1>
                <p className='text-muted'>
                  Build beautiful modern website with flexible bootstrap
                  components built from scratch
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <button className='btn btn-large btn-primary mr-1'>
                  View All Pages
                </button>
                <button className='btn btn-large btn-outline-primary'>
                  Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 d-none d-lg-block'>
          <img src={TeamImage} className='team-img' alt='team' />
        </div>
      </div>
      <div className='row cards-section'>
        <div className='col-md-4'>
          <div className='container'>
            <div className='icon-spacing'>
              <i class='fa welcome-section-icons fa-toggle-off fa-3x'></i>
            </div>
            <h5>Build for developers</h5>
            <p className='text-muted'>
              Landkit is built to make your life easier. Varibles, build
              tooking, documentation and reusable components
            </p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='container'>
            <div className='icon-spacing'>
              <i class='fa welcome-section-icons fa-th fa-3x'></i>
            </div>

            <h5>Designed to be modern</h5>
            <p className='text-muted'>
              Landkit is built to make your life easier. Varibles, build
              tooking, documentation and reusable components
            </p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='container'>
            <div className='icon-spacing'>
              <i class='fa welcome-section-icons fa-code fa-3x'></i>
            </div>
            <h5>Documentation for everything</h5>
            <p className='text-muted'>
              Landkit is built to make your life easier. Varibles, build
              tooking, documentation and reusable components
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
