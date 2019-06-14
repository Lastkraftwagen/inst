import React, { Component } from 'react';

// class Data extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: Array
//     }
//   }
//   componentDidMount() {
//     fetch('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts')
//       .then((response) => response.json())
//       .then((response) => {
//         this.setState({ items: response });
//         this.setState({ isLoaded: true });
//       })
//       .then((error) => {
//         this.setState({ false: true });
//         this.setState({ error });
//       })
//   }
//   render() {
//     return (
//       this.state.isLoaded ?
//         (this.state.items.map((element, index) => (
//           <div key = {element.id}>
//             <p>{element.id}</p>
//             <p>{element.likes}</p>
//           </div>))
//         )
//         :
//         (<h1>error</h1>)
//     );
//   }
//}

const Data = {data: []};

const Data = async () => {
  try {
    const response = await fetch('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts', {
      method: 'GET'
    })
    if (response) {
      return await response.json();
    }
  } catch (error) {
    console.log({ error });
  }
}

export default Data;
