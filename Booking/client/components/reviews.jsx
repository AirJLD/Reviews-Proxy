import React from 'react';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

const Reviews = ({ reviews, stars }) => {
  const starDisplay = [];

  for (let i = 1; i <= stars; i += 1) {
    starDisplay.push(i);
  }

  return (
    <div>
      <div className="stars">
        {starDisplay.map(e => <FontAwesomeIcon icon="star" key={e} />)}
        <span className="reviews">
          &nbsp;
          &nbsp;
          {reviews}
        </span>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.number,
  stars: PropTypes.number,
};

Reviews.defaultProps = {
  reviews: 0,
  stars: 1,
};

export default Reviews;
