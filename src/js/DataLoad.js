const DataLoad = async () => {
  try {
    const response = await fetch('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts', {
      method: 'GET'
    })
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log({ error });
  }
}

const DataDelete = (id) => {
  let Url = `https://5b27755162e42b0014915662.mockapi.io/api/v1/posts/${id}`;
  return fetch(Url, {
    method: 'DELETE'
  })
    .then(res => res.json());
};

const DataSend = (element) => {
  // console.log(JSON.stringify(element));
  return fetch("https://5b27755162e42b0014915662.mockapi.io/api/v1/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "PostmanRuntime/7.15.0",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Host": "5b27755162e42b0014915662.mockapi.io",
        "accept-encoding": "gzip, deflate",
        "content-length": "62156",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
      },
      body: JSON.stringify(element)
    }).then(res => res.json());
}

export { DataSend };

export { DataDelete };

export { DataLoad };


// class Data extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
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
// }
// const Data = {data: []};
