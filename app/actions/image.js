import Alt from 'alt_flux';
import { createActions } from 'alt-utils/lib/decorators';

@createActions(Alt)
export default class ImageActions {
  constructor() {
    this.generateActions('setCaption', 'setFile');
  }
}
