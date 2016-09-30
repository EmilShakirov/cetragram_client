import React from 'react';
import { mount } from 'enzyme';
import Home from 'components/home';
import ImageForm from 'components/image_form';

describe('Home', () => {
  const homeComponent = mount(<Home/>);

  it('contains ImageForm component', () => {
    expect(homeComponent.find(ImageForm).length).toEqual(1);
  });
});
