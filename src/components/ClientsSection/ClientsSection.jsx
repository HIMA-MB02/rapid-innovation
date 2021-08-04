import React from 'react';
import './ClientsSection.css';
import AirBnB from '../../assets/img/airbnb.png';
import Coinbase from '../../assets/img/coinbase.png';
import Netflix from '../../assets/img/netflix.png';
import Insta from '../../assets/img/instagram.png';

const ClientsSection = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-2 clients-section text-center'>
          <img className='client-image' src={AirBnB} alt='airbnb' />
        </div>
        <div className='col-md-2 clients-section text-center'>
          <img className='client-image' src={Coinbase} alt='airbnb' />
        </div>
        <div className='col-md-2 clients-section text-center'>
          <img className='client-image' src={Insta} alt='airbnb' />
        </div>
        <div className='col-md-2 clients-section text-center'>
          <img className='client-image' src={Netflix} alt='airbnb' />
        </div>
        <div className='col-md-2 clients-section text-center'>
          <img className='client-image' src={AirBnB} alt='airbnb' />
        </div>
        <div className='col-md-2 clients-section text-center'>
          <img className='client-image' src={Insta} alt='airbnb' />
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
