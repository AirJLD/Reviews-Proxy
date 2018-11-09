import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <div id="overview">
          <div id="amount">
            {this.props.data.length}
            {' '}
            Reviews
          </div>
          <div id="final_stars">
            stars
          </div>
          <div id="search">
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
