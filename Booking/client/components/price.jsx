/* eslint camelcase: "off" */

import React from 'react';
import PropTypes from 'prop-types';

const Price = ({
  cleaning_fee,
  service_fee,
  day_rate,
  total,
  daysBooked,
}) => {
  const confirmBooking = (
    <div className="confirm-booking">
      <div className="nights">
        $
        {day_rate}
        {' '}
        x
        {' '}
        {daysBooked}
        {' '}
        nights
        {' '}
        <span className="cost">
          {' '}
          $
          {day_rate * daysBooked}
        </span>
      </div>
      <div className="fee">
        Cleaning fee
        <span className="cost">
          {' '}
          $
          {cleaning_fee}
        </span>
      </div>
      <div className="fee">
      Service fee
        <span className="cost">
          {' '}
          $
          {service_fee}
        </span>
      </div>
      <div className="total">
      Total
        <span className="cost">
          {' '}
          $
          {total}
        </span>
      </div>
    </div>
  );

  return (
    <div className="price">
      <div className="rate">
        $
        {day_rate}
        <span className="per-night"> per night</span>
      </div>
      {total > 0 ? confirmBooking : null}
    </div>
  );
};

Price.propTypes = {
  day_rate: PropTypes.number,
  cleaning_fee: PropTypes.number,
  service_fee: PropTypes.number,
  total: PropTypes.number,
  daysBooked: PropTypes.number,
};

Price.defaultProps = {
  total: 0,
  day_rate: 0,
  cleaning_fee: 0,
  service_fee: 0,
  daysBooked: 0,
};

export default Price;
