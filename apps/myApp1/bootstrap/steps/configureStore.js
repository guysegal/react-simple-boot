import {createStore} from 'redux';
import rootReducer from '../../state/rootReducer';

export default () => {
    const store = createStore(rootReducer);
    return store;
}