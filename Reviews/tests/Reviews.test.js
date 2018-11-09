import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import { render } from 'react-testing-library';

import Reviews from '../client/src/components/reviews.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<Reviews />', () => {
  const mock_data = [{
    id: 0,
    reviewer_id: 13,
    review_body: 'Hello world\r\n',
    review_time: '2017-03-04T07:31:10 +08:00',
    accuracy: 5,
    communication: 2,
    cleanliness: 4,
    'check-in': 3,
    value: 4,
    location: 2,
    house_id: 62,
  }];
  it('renders 1 <Reviews /> component', () => {
    const { getByTestId } = render(
      <Reviews data={mock_data} />,
    );
    const review_time= getByTestId('review_time');
    expect(review_time).not.toBeNull();
  });
});
