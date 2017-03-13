import {CompositeDisposable} from 'rx';

const configureStore = require('./steps/configureStore').default;
const syncStep = require('./steps/syncStep').default;
const syncStepWithParams = require('./steps/syncStepWithParams').default;
const asyncStep = require('./steps/asyncStep').default;
const listenerStep = require('./steps/listenerStep').default;

export default bootApp = async (props) => {
  const store = configureStore();  
  syncStep();
  syncStepWithParams(store);  
  await asyncStep();
  const disposeListener = listenerStep(store);
  
  return {
      artifacts: {store},
      disposables: new CompositeDisposable([disposeListener])
  }
}