import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator'

class AppStore {
  @observable someValue = "";

  someAction(payload) {
    this.someValue = payload.someValue;
  }
}

export default new AppStore();