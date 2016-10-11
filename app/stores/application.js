import Alt from 'alt_flux';
import { createStore } from 'alt-utils/lib/decorators';
import ApplicationActions from 'actions/application';

@createStore(Alt)
export default class ApplicationStore {
  static displayName = 'ApplicationStore'

  constructor() {
    this.isModalOpen = false;
    this.isLoading = false;
    this.modalName = '';
    this.modalOptions = {};
    this.params = {};

    this.bindListeners({
      openModal: ApplicationActions.OPEN_MODAL,
      closeModal: ApplicationActions.CLOSE_MODAL,
      setIsLoading: ApplicationActions.SET_IS_LOADING
    });
  }

  openModal({ name, params, ...rest }) {
    this.isModalOpen = true;
    this.modalName = name;
    this.params = params;
    this.modalOptions = { ...rest };
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalName = '';
    this.params = {};
  }

  setIsLoading(state) {
    this.isLoading = state;
  }
}
