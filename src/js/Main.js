import React from 'react';
import Data from '../js/Data'
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount = async () => {
    const arr = await Data();
    this.setState({items: arr});
  }
  render() {
    
    return (
        (this.state.items.map((element) => (
          <div key = {element.id}>
            <p>{element.id}</p>
            <p>{element.likes}</p>
          </div>))
        )
    );
  }
}


export default Main;