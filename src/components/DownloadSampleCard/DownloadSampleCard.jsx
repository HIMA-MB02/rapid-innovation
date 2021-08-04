import React from 'react';
import './DownloadSampleCard.css';
import DownloadSampleCardImage from '../../assets/img/download-sample-card-image.jpg';

const DownloadSampleCard = () => {
  const [isFormValid, setIsFormValid] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
            break;
        default:
            break;
    }
  };

  const handleSubmit = () => {
    if (isFormValid) {
      if (!(email.length && password.length && name.length)) {
        setIsFormValid(false);
      }
    }
  };

  return (
    <>
      <div class='card border-0'>
        <img src={DownloadSampleCardImage} alt='team' />
        <div class='card-body'>
          <div class='form-group'>
            <div class='form-floating mb-3'>
              <input
                type='text'
                name='name'
                class='form-control floating-input'
                value={name}
                placeholder='Name'
                onChange={handleChange}
              />
              <label for='floatingPassword'>Name</label>
            </div>
            <div class='form-floating mb-3'>
              <input
                type='text'
                name='email'
                class='form-control floating-input'
                value={email}
                placeholder='name@example.com'
                onChange={handleChange}
              />
              <label for='floatingInput'>Email address</label>
            </div>
            <div class='form-floating mb-5'>
              <input
                type='password'
                name='password'
                class='form-control floating-input'
                value={password}
                placeholder='Password'
                onChange={handleChange}
              />
              <label for='floatingPassword'>Password</label>
            </div>
            <div class='form-floating'>
              <button
                class='btn btn-secondary submit-button'
                onClick={() => handleSubmit()}
              >
                Download a sample
              </button>
              {!isFormValid && (
                <div class='text-danger form-error'>Please fix all form errors!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadSampleCard;
