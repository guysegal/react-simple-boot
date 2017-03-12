import {Observable} from 'rx';
import {disposable} from '../../../../react-simple-bootstrap';

export default () => {
    const subscription = Observable.interval(2000).subscribe(() => console.log("hi!"));
    return disposable(() => subscription.dispose());
}