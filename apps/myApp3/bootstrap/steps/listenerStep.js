import {Observable} from 'rx';

export default (store) => {
    const subscription = Observable.interval(2000)
        .first()
        .subscribe(() =>  {console.log("4444");store.someAction({someValue: 7})});
        
    return () => subscription.dispose();
}