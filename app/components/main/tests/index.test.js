import React from 'react';
import { mount } from 'enzyme';
import Main from 'components/main';
import Home from 'components/home';

describe('Main', () => {
  it('renders Home component', () => {
    const mainComponent = mount(<Main/>);

    expect(mainComponent.contains(<Home/>)).toEqual(true);
  });
});
