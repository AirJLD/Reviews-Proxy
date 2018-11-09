import React from 'react';

import Search from './search.jsx';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.displayData = {
      accuracy: [],
      communication: [],
      cleanliness: [],
      location: [],
      checkIn: [],
      value: [],
      final: [],
    };
    this.props = props;
    this.sum = 0;
    this.ave = 0;
    this.sub_ave = 0;
    this.starlize = this.starlize.bind(this);
    this.caculator = this.caculator.bind(this);
  }

  starlize(num, target) {
    let counter = 0
    while (num > 1) {
      num = num - 1;
      target.push(<Full />);
      counter++;
    }
    if (num < 0.5) {
      target.push(<Half />);
    } else {
      target.push(<Full />);
    }
    counter++;
    while (5 - counter > 0) {
      target.push(<Empty />);
      counter++;
    }
  };

  caculator(n, m) {
    const arr = this.props.star.map((a) => {
      return a[m];
    });
    const sum = arr.reduce((s, v) => {
      return s + (v || 0);
    }, 0);
    this.sub_ave = sum / this.props.star.length;
    this.sum += this.sub_ave;
    this.starlize(this.sub_ave, n);
  }

  render() {
    this.caculator(this.displayData.accuracy, 'accuracy');
    this.caculator(this.displayData.communication, 'communication');
    this.caculator(this.displayData.cleanliness, 'cleanliness');
    this.caculator(this.displayData.location, 'location');
    this.caculator(this.displayData.value, 'value');
    this.caculator(this.displayData.checkIn, 'check-in');
    this.ave = this.sum / 6;
    this.starlize(this.ave, this.displayData.final);

    return (
      <div>
      <div>
        <div id="overview">
          <div id="amount">
            {this.props.star.length}
            {' '}
            Reviews
          </div>
          <div id="final_stars">
            {this.displayData.final}
          </div>
          <Search />
        </div>
      </div>
        <div id="outline">
          <div id="dividing">
            <div id="line"></div>
          </div>
        </div>
        <div id="stars_container">
          <div id="stars_left">
            <div id="stars_box">
              <div id="stars_text">
              Accuracy
              </div>
              <div id="stars">
                {this.displayData.accuracy}
              </div>
            </div>
            <div id="stars_box">
              <div id="stars_text">
                Communication
              </div>
              <div id="stars">
                {this.displayData.communication}
              </div>
            </div>
            <div id="stars_box">
              <div id="stars_text">
                Cleanliness
              </div>
              <div id="stars">
                {this.displayData.cleanliness}
              </div>
            </div>
          </div>
          <div id="stars_right">
            <div id="stars_box">
              <div id="stars_text">
                Location
              </div>
              <div id="stars">
                {this.displayData.location}
              </div>
            </div>
            <div id="stars_box">
              <div id="stars_text">
                Check-in
              </div>
              <div id="stars">
                {this.displayData.checkIn}
              </div>
            </div>
            <div id="stars_box">
              <div id="stars_text">
                Value
              </div>
              <div id="stars">
                {this.displayData.value}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Full = () => (
  <div>
    <span id="full">
      <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" >
        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 
        0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 
        446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 
        54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
      </svg>
    </span>
  </div>
);

const Empty = () => (
  <div>
    <span id="empty">
      <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" >
        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 
        0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 
        446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 
        54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
      </svg>
    </span>
  </div>
);

const Half = () => (
  <div>
    <span id="half">
      <span id="bottom">
        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" >
          <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 
          0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 
          446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 
          54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"></path>
        </svg>
      </span>
      <span id="front">
        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
          <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 
          447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z">
          </path>
        </svg>
      </span>
    </span>
  </div>
);

export default Stars;
