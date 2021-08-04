import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../routes/Routes';
import './NavigationBar.css';

const NavigationBar = () => {
  const location = useLocation();
  return (
    <nav class='navbar navbar-expand-lg navbar-dark'>
      <div class='container'>
        <Link
          className='navbar-brand'
          to={{
            pathname: routes.home,
          }}
        >
          Landkit.
        </Link>

        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i class="fa fa-chevron-circle-down fa-2x menu-icon"></i>
        </button>

        <div class='collapse navbar-collapse' id='navbarColor01'>
          <ul class='navbar-nav mx-auto'>
            <li class='nav-item'>
              <Link
                className={`nav-link ${
                  location.pathname === routes.home ||
                  location.pathname === routes.landingPage
                    ? 'active'
                    : ''
                }`}
                to={{
                  pathname: routes.landingPage,
                }}
              >
                Landing Page
              </Link>
            </li>
            <li class='nav-item'>
              <Link
                className={`nav-link ${
                  location.pathname === routes.pagesPage ? 'active' : ''
                }`}
                to={{
                  pathname: routes.pagesPage,
                }}
              >
                Page
              </Link>
            </li>
            <li class='nav-item'>
              <Link
                className={`nav-link ${
                  location.pathname === routes.accountPage ? 'active' : ''
                }`}
                to={{
                  pathname: routes.accountPage,
                }}
              >
                Accounts
              </Link>
            </li>
            <Link
              className={`nav-link ${
                location.pathname === routes.documentationPage ? 'active' : ''
              }`}
              to={{
                pathname: routes.documentationPage,
              }}
            >
              Documentation
            </Link>
          </ul>
          <div class='d-flex'>
            <button class='btn btn-primary my-2 my-sm-0' type='submit'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
