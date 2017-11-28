import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';

class App extends Component {

  state = {
    firstName: 'John',
    lastName: 'Doe',
    imageURL: "https://randomuser.me/api/portraits/men/83.jpg"
  }

  onChangeFirstName = (event) => {
    console.log('First name changed!')
    const input = event.target;
    const newFirstName = input.value;
    this.setState({
      firstName: newFirstName
    })
  }

  onChangeLastName = (event) => {
    console.log('Last name changed!')
    const input = event.target;
    const newLastName = input.value;
    this.setState({
      lastName: newLastName
    })
  }

  onChangeUrl = (event) => {
    console.log('URL changed!')
    const input = event.target;
    const newUrl = input.value;
    this.setState({
      url: newUrl
    })
  }

  render() {
    let { firstName, lastName, imageURL } = this.state;

    return (
      <div className="App">
        <Profile
        firstName= { firstName }
        lastName = { lastName }
        imageURL={ imageURL } />

        <label>
          First name:
          <input type ="text" value={ firstName } onChange={ this.onChangeFirstName } />
        </label><br />

        <label><br />
          Last name:
          <input type ="text" value={ lastName } onChange={ this.onChangeLastName } />
        </label><br />

        <label><br />
          Image:
          <input type ="url" />
        </label>


      </div>
    );
  }
}

export default App;
