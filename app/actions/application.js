import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';

@createActions(Alt)
export default class ApplicationActions {
  constructor() {
    this.generateActions( 'closeModal', 'openModal', 'setIsLoading');
  }
}
