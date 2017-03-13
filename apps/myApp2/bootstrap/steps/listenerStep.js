import {Observable} from 'rx';
import {disposable} from '../../../../react-bootstrapper';

export default () => {
    const subscription = Observable.interval(2000).subscribe(() => console.log("hi!"));
    return disposable(() => subscription.dispose());
}