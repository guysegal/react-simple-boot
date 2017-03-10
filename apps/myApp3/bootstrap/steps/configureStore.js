export default () => {
    const store = require('../../state/appStore').default;
    console.log("aaaa", store)
    console.log("aaaa", store.someValue)        
    return store;
}