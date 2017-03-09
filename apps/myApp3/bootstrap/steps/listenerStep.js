import {Observable} from 'rx';
import {createStore} from 'redux';
import rootReducer from '../../state/rootReducer';

export default ({dispatch}) => {
    const subscription = Observable.interval(2000)
        .first()
        .subscribe(() => dispatch({type: "someAction", payload: { someValue: 7}}));
        
    return () => subscription.dispose();
}