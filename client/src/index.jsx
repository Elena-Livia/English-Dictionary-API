import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import './index.css';
import App from './components/App.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

     }

  };

render() {
	return (
		<div><App /> </div>
		)
}

}


ReactDOM.render(<App />, document.getElementById('root'));

