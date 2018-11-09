/* eslint-disable no-unused-expressions */

import React from 'react';
import { DateRangePicker } from 'react-dates';
import Adapter from 'enzyme-adapter-react-16';
import {
  shallow,
  render,
  mount,
  configure,
} from 'enzyme';
import moment from 'moment';

import Book from '../client/components/book';
import Booking from '../client/components/booking';
import Calendar from '../client/components/calendar';
import Guests from '../client/components/guests';
import Price from '../client/components/price';
import Reviews from '../client/components/reviews';

configure({ adapter: new Adapter() });

describe('<Booking />', () => {
  let w;
  beforeEach(() => {
    w = mount(<Booking />);
  });

  it('contains Book, Calendar, Guest, Price, and Review components', () => {
    expect(w.contains(Book)).toBe(true);
    expect(w.contains(Calendar)).toBe(true);
    expect(w.contains(Guests)).toBe(true);
    expect(w.contains(Price)).toBe(true);
    expect(w.contains(Reviews)).toBe(true);
  });
});

describe('<Calendar />', () => {
  let w;
  const date = moment(new Date());
  beforeEach(() => {
    w = mount(<Calendar
      startDate={date}
      endDate={date}
      startDateId="start-date"
      endDateId="end-date"
      handleDatesChange={() => {}}
      handleFocusChange={() => {}}
    />);
  });

  it('has DateRangePicker component', () => {
    expect(w.contains(DateRangePicker)).toBe(true);
  });

  it('is passed a startDate', () => {
    expect(w.props().startDate).toBe(date);
  });

  it('is passed an endDate', () => {
    expect(w.props().endDate).toBe(date);
  });
});

describe('<Book />', () => {
  let w;
  beforeEach(() => {
    w = mount(<Book handleOnSubmit={jest.fn(() => {})} />);
  });

  it('has Book Button', () => {
    expect(w.find('button').hasClass('book-button')).toBe(true);
  });

  it('is passed a handleOnSubmit props function', () => {
    expect(typeof w.props().handleOnSubmit).toBe('function');
  });

  it('has clickable Button which triggers handleOnSubmit function', () => {
    w.find('button').simulate('click');
    expect(w.props().handleOnSubmit).toHaveBeenCalled();
  });
});

describe('<Guests />', () => {
  let w;
  beforeEach(() => {
    w = mount(<Guests />);
  });

  it('has guest dropdown menu', () => {
    expect(w.find('.guest-dropdown')).toBeTruthy();
  });
});
