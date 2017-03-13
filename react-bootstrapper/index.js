export default Bootstrapper = require('./Bootstrapper').default;
export const sequence = require('./sequence').default;
export const parallel = require('./parallel').default;
export const artifact = value => ({ type: "artifact", value});
export const disposable = value => ({ type: "disposable", value});