import {createStore} from 'redux';
import rootReducer from '../../state/rootReducer';
import {artifact} from '../../../../react-simple-boot';

export default () => {
    const store = createStore(rootReducer);
    return artifact({store});
}