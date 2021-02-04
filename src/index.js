import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/imageFileInput/imageFileInput';
import '@fortawesome/fontawesome-free/js/all.js';
import CardRespository from './service/card_respository';


const authService = new AuthService();
const cardRespository = new CardRespository();
const imageUploader = new ImageUploader();

const FileInput = memo((props) => {
  return <ImageFileInput {...props} imageUploader={imageUploader} />
})

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authService={authService} cardRespository={cardRespository} />
  </React.StrictMode>,
  document.getElementById('root')
);
