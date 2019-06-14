import React from 'react';
import Data from '../js/Data'

// function Main() {
//   return (
//     <div>
//       {/* {Data.map(element=>(<div>
//       <p>{element.id}</p>
//       <p>{element.likes}</p>
//       </div>))} */
//       <Data></Data>}
//     </div>
//   );
// }

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: Array
    }
  }

  componentDidMount() {
    fetch('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts')
      .then((response) => response.json())
      .then((response) => {
        this.setState({ items: response });
        this.setState({ isLoaded: true });
      })
      .then((error) => {
        this.setState({ false: true });
        this.setState({ error });
      })
  }
  render() {
    return (
      this.state.isLoaded ?
        (this.state.items.map((element, index) => (
          <div key = {element.id}>
            <p>{element.id}</p>
            <p>{element.likes}</p>
          </div>))
        )
        :
        (<h1>error</h1>)
    );
  }
}

export default Main;