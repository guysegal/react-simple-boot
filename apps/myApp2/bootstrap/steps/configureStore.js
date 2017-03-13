import {createStore} from 'redux';
import rootReducer from '../../state/rootReducer';
import {artifact} from '../../../../react-bootstrapper';

export default () => {
    const store = createStore(rootReducer);
    return {store};
}