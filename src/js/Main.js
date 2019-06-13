import React from 'react';

let data;

const fetchAll = async () => {
  try {
    const response = await fetch('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts', {
      method: 'GET'
    })
    if (response) {
      data = await response.json();
      
    }
  } catch (error) {
    console.log({ error });
  }
}

function Main() {
  return (
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
  );
}

export default Main;