import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import App from '../client/src/app.jsx';
import Stars from '../client/src/components/stars.jsx';
import Reviews from '../client/src/components/reviews.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const app = shallow(<App />);
  it('renders 1 <Apps /> component', () => {
    expect(app.exists()).toBe(true);
  });
  it('should render a <div />', () => {
    expect(app.find('div').length).toEqual(1);
  });
  it('should render the Stars Component', () => {
    expect(app.containsMatchingElement(<Stars />)).toEqual(true);
  });
  it('should render the Reivews Component', () => {
    expect(app.containsMatchingElement(<Reviews />)).toEqual(true);
  });
});

describe('Fetching', () => {
  
})
