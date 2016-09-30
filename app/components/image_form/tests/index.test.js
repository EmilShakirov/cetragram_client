import React from 'react';
import {
  Button,
  Col,
  Well
} from 'react-bootstrap';
import { mount } from 'enzyme';
import ImageForm from 'components/image_form';
import DropzoneSpot from 'components/dropzone_spot';

describe('ImageForm', () => {
  let imageFormComponent;
  let buttonText;

  describe('when form is pristine', () => {
    buttonText = 'Please upload image';

    beforeEach(() => {
      imageFormComponent = mount(<ImageForm/>);
    });

    it('renders DropzoneSpot component', () => {
      const well = imageFormComponent.find(Col).find(Well);

      expect(well.find(DropzoneSpot).length).toEqual(1);
    });

    it('has button with certain text', () => {
      expect(imageFormComponent.find(Button).text()).toEqual(buttonText);
    });
  });
});
