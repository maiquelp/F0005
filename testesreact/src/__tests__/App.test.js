import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Testing App', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
  });
});