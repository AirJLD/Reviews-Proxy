import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import App from '../client/src/app.jsx';

import Stars from '../client/src/components/stars.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<Stars />', () => {
  it('renders 1 <Stars /> component', () => {
    const app = shallow(<Stars />);
    expect(app.exists()).toBe(true);
  });
});
