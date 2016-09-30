import React from 'react';
import { mount } from 'enzyme';
import session from 'services/session';
import Main from 'components/main';
import Home from 'components/home';
import VisitorsHome from 'components/visitors_home';

describe('Main', () => {
  let mainComponent;

  describe('when user logged in', () => {
    beforeEach(() => {
      spyOn(session, 'loggedIn').and.returnValue(true);
      mainComponent = mount(<Main/>);
    });

    it('renders Home component', () => {
      expect(mainComponent.contains(<Home/>)).toEqual(true);
    });
  });

  describe('when user is not logged in', () => {
    beforeEach(() => {
      mainComponent = mount(<Main/>);
    });

    it('renders Home component', () => {

      expect(mainComponent.contains(<VisitorsHome/>)).toEqual(true);
    });
  });
});
