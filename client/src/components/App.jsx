import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
    	super(props)
    	this.state = {
      	words: '',
        definition: []
    	}

    // this.onSubmit = this.onSubmit.bind(this);
    // this.onChange = this.onChange.bind(this);

  }

// onSubmit(e) {

// }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
      </div>
    );
  }
}
export default App;