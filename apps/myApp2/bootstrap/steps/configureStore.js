import {createStore} from 'redux';
import rootReducer from '../../state/rootReducer';
import {artifact} from '../../../../react-simple-bootstrap';

export default () => {
    const store = createStore(rootReducer);
    return artifact({store});
}