import {Observable} from 'rx';

export default () => {
    return Observable.just(null).delay(1000).toPromise();  
}