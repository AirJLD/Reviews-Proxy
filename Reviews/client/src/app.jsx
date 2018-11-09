import React from 'react';

import ReactDOM from 'react-dom';

import axios from 'axios';

import Reviews from './components/reviews.jsx';

import Stars from './components/stars.jsx';

import Overview from './components/overview.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentHouse: 0,
      isLoading: false,
    };
  }

  componentWillMount() {
    const house = Math.floor(Math.random() * 100);
    axios.get(`/api/${house}`).then((response) => {
      this.setState({
        data: response.data,
        currentHouse: house,
        isLoading: true,
      });
    }).catch((err) => {
      console.log('error: ', err);
    });
  }

  render() {
    return (
      <div id="section_container">
        {this.state.isLoading &&
          <Stars star={this.state.data}/>
        }
        {this.state.isLoading &&
          <Reviews data={this.state.data} house={this.state.currentHouse}/>
        }
      </div>);
  }
}

export default App;
