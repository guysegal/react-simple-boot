import {CompositeDisposable} from 'rx';

const configureStore = require('./steps/configureStore').default;
const syncStep = require('./steps/syncStep').default;
const syncStepWithParams = require('./steps/syncStepWithParams').default;
const asyncStep = require('./steps/asyncStep').default;
const listenerStep = require('./steps/listenerStep').default;

export default bootApp = async () => {
  const store = configureStore();  
  syncStep();
  syncStepWithParams(store);  
  await asyncStep();
  const disposeListener = listenerStep(store);
  
  return {
      artifacts: {store},
      shutdown: new CompositeDisposable([disposeListener])
  }
}
const bootApp2 = (props) => {
  return ordered([
      measure("configure-store", configureStore),
      measure("init-firebase", () => syncStep(props)),
      measure("sync-step-2", syncStepWithParams),

      parallel([
          measure("async-step1", asyncStep),
          measure("async-step2", asyncStep),
          measure("async-step3", asyncStep),
          measure("async-step4", asyncStep),
          measure("async-step5", asyncStep),
          measure("listener", listenerStep)
      ])      
  ]);
}

const parallel = (steps) => (input) => {
    return {
        type: "parallel",
        run: () => {
          const promises = steps.map(s => Promise.resolve().then(() => step(input)));
          return Promise.all(promises);
        }
    }
}

const ordered = async (steps) => {
    const input = {};
    for (step of steps) {
        if (step.type === "parallel") {
          const output = await step.run(input)
        }
        else {
          const output = await Promise.resolve().then(() => step(...input));
        }
        input = {...input, ...output};         
    }
}