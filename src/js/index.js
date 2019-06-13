import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';
import App from './App';
import * as serviceWorker from '../serviceWorker';

let data;

const fetchAll = async () => {
  try {
    const response = await fetch('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts', {
      method: 'GET'
    })
    if (response) {
      data = await response.json();
      initialise();
    }
  } catch (error) {
    console.log({ error });
  }
}
document.addEventListener('loadend', fetchAll())

const initialise = () => {
  console.log(data);
  ReactDOM.render(<App />, document.getElementById('root'));
}

serviceWorker.unregister();
