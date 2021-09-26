import React from 'react';
import { shallow } from 'enzyme';
import Todos from '../Todos';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

const initialState = {
  todos : [  
    {id: 0, text: 'to do 0'},
    {id: 1, text: 'to do 1'},
    {id: 2, text: 'to do 2'},
  ],
};

const store = mockStore(initialState);

describe('Testing Todos', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Todos />,
      { context: { store } }
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});