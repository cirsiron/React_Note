import React, { Component } from 'react';
import MyComponent from "./components/MyComponent.jsx";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          name: 'level-1',
          children: [
            {
              name: 'level-2',
              children: [
                {
                  name: 'level-3',
                }
              ]
            }
          ]
        },
        {
          name: 'level-1',
          children: []
        }
      ]
    }
    this.changeName = this.changeName.bind(this);
  }
  changeName(item, index) {
    item.name = "san"
    this.setState({
      array: this.state.array
    });
  }
  render() {
    return (
      <div>
        <MyComponent changeName={this.changeName} children={this.state.array}/>
      </div>
    );
  }
}

export default App;
