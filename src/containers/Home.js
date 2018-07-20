import React, { Component } from 'react';
import MainInput from '../components/MainInput.js'
import logo from '../logo.svg';
import '../styles/css/index.css';

class App extends Component {

  initialState() {
    quote: ''
    authorName: ''
  }

  componentDidMount() {
    const that = this
    const url =  'https://talaikis.com/api/quotes/random'

    fetch(url).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log('No data !'))
  }

  renderData(data) {
    console.log(data)
  }

  render() {
    return (
      <main>
        <MainInput/>
      </main>
    );
  }
}

export default App;
