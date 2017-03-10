import {createStore} from 'redux';

export default (store) => {
    console.log("11111x1")
    store.someAction({someValue: 2});
    console.log("222222")
    
}