import React from 'react';
import { mount } from 'enzyme';
import Footer from 'components/footer';

describe('Footer', () => {
  const footerComponent = mount(<Footer/>);
  const footerText = 'cetragram — like instagram, but for poor people.';

  it('renders text', () => {
    expect(footerComponent.find('p').text()).toEqual(footerText);
  });
});
