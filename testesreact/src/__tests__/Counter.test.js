import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';

describe('Testing Counter', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Counter count={5} />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({count: 20});
    expect(wrapper).toMatchSnapshot();
  });
});