import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ handleOnSubmit }) => (
  <div>
    <button className="book-button" type="submit" onClick={handleOnSubmit}>Book</button>
    <div className="book-text">You won&#39;t be charged yet</div>
  </div>
);

Book.propTypes = {
  handleOnSubmit: PropTypes.func,
};

Book.defaultProps = {
  handleOnSubmit: () => {},
};

export default Book;
