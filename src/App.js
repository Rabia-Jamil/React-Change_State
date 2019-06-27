import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import propTypes from 'prop-types';

//changeState
class UnserstandingState extends Component{
  render(){
    return(
      <div>
         <ul>
           {this.props.name.map((n, index) => <li key = {index}>{n}</li>)}
         </ul>
         <button onClick = {this.props.plzChangeTheState}>Click Me!</button>
      </div>
    )
  }
}

//propTypes
class TypeofProps extends Component{
  static propTypes = {
    name: propTypes.array
  }

/*static propTypes = {
  name : propTypes.oneOfType([propTypes.bool, propTypes.string])
}*/

  render(){
    return(
        <ul>
          {this.props.name.map((n, index) => <li key = {index}>{n}</li>)}
        </ul>
    )
  }
}

class App extends Component {
  state = {
    birdNames: ['Crow', 'Parrot', 'Sparrow']
  }

  changeTheState = () => {
    this.setState(
      () => ({
        birdNames : ['Peacock', 'Pigeon']
      })
    )
  }

  render() {
   const people =  ['Fehmeeda', 'Jamil', 'Rabia']
    return (
      <div>
        <UnserstandingState name = {this.state.birdNames}   plzChangeTheState = {this.changeTheState}/>
        <TypeofProps name = {people}/>
      </div>
    );
  }
}

export default App;
