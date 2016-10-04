import React from 'react';
import { mount } from 'enzyme';
import { Modal } from 'react-bootstrap';
import { Simulate } from 'react/lib/ReactTestUtils';
import SignupModal from 'components/signupModal';

/* eslint-disable max-statements */
describe('Signup Modal', () => {
  const state = { isModalOpen: true };
  const signupModalComponent = mount(<SignupModal />);
  let emailInput,
    modalDialogContent,
    nameInput,
    passwordConfirmationInput,
    passwordInput;

  beforeAll(() => {
    signupModalComponent.setState(state);
    modalDialogContent = signupModalComponent.find(Modal).node._modal.getDialogElement();
    emailInput = modalDialogContent.querySelector('[name=email]');
    nameInput = modalDialogContent.querySelector('[name=name]');
    passwordConfirmationInput = modalDialogContent.querySelector('[name=passwordConfirmation]');
    passwordInput = modalDialogContent.querySelector('[name=password]');
  });

  afterAll(() => {
    signupModalComponent.unmount();
  });

  it('has Modal component', () => {
    expect(signupModalComponent.find(Modal).length).toEqual(1);
  });

  it('renders Modal with form fields', () => {
    expect(modalDialogContent.getElementsByClassName('form-control').length).toEqual(4);
  });

  describe('when name is empty', () => {
    it('appears error class', () => {
      Simulate.change(nameInput, {
        target: {
          name: 'name',
          value: ''
        }
      });

      expect(nameInput.parentElement.classList.contains('has-error')).toEqual(true);
    });
  });

  describe('when name is valid', () => {
    it('appears success class', () => {
      Simulate.change(nameInput, {
        target: {
          name: 'name',
          value: 'someName'
        }
      });

      expect(nameInput.parentElement.classList.contains('has-success')).toEqual(true);
    });
  });

  describe('when email is too short', () => {
    it('appears error class', () => {
      Simulate.change(emailInput, {
        target: {
          name: 'email',
          value: 'short'
        }
      });

      expect(emailInput.parentElement.classList.contains('has-error')).toEqual(true);
    });
  });

  describe('when email is valid', () => {
    it('appears success class', () => {
      Simulate.change(emailInput, {
        target: {
          name: 'email',
          value: 'email@example.com'
        }
      });

      expect(emailInput.parentElement.classList.contains('has-success')).toEqual(true);
    });
  });

  describe('when password is too short', () => {
    it('appears error class', () => {
      Simulate.change(passwordInput, {
        target: {
          name: 'password',
          value: 'short'
        }
      });

      expect(passwordInput.parentElement.classList.contains('has-error')).toEqual(true);
    });
  });

  describe('when password is valid', () => {
    it('appears success class', () => {
      Simulate.change(passwordInput, {
        target: {
          name: 'password',
          value: 'strongPassword'
        }
      });

      expect(passwordInput.parentElement.classList.contains('has-success')).toEqual(true);
    });
  });

  describe('when the passwords match', () => {
    it('appears success class', () => {
      Simulate.change(passwordInput, {
        target: {
          name: 'password',
          value: 'superSecurityPassword'
        }
      });

      Simulate.change(passwordConfirmationInput, {
        target: {
          name: 'passwordConfirmation',
          value: 'superSecurityPassword'
        }
      });

      expect(passwordConfirmationInput.parentElement.classList.contains('has-success')).toEqual(true);
      expect(passwordInput.value).toEqual(passwordConfirmationInput.value);
    });
  });
});
/* eslint-enable max-statements */
