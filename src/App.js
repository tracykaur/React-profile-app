import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';

class App extends Component {

  state = {
    firstName: 'John',
    lastName: 'Doe',
    imageURL: "https://randomuser.me/api/portraits/men/2.jpg",
    editable: false
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
    const newImageUrl = input.value;
    this.setState({
      imageURL: newImageUrl
    })
  }

  editClicked = () => {
    this.setState(prevState => ({
      editable: !prevState.editable
    }))
  }

  render() {
    let { firstName, lastName, imageURL } = this.state;

    return (
      <div className="App">
        <Profile
        firstName= { firstName }
        lastName = { lastName }
        imageURL={ imageURL } />

        {(this.state.editable) ?

      <div>
        <label>

          First name:
          <input type ="text" value={ firstName } onChange={ this.onChangeFirstName } />
        </label><br />

        <label><br />
          Last name:
          <input type ="text" value={ lastName } onChange={ this.onChangeLastName } />
        </label><br />

        <label><br />
          Your Image:
          <input type ="text" value={ imageURL } onChange={ this.onChangeUrl } />
        </label>
      </div>
        : ""
      }
        <button onClick={ this.editClicked }>Edit</button>


      </div>
    );
  }
}

export default App;
