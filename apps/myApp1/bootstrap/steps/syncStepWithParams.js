import {createStore} from 'redux';
import rootReducer from '../../state/rootReducer';

export default ({dispatch}) => {
    dispatch({type: "someAction", payload: {someValue: 1}});
}