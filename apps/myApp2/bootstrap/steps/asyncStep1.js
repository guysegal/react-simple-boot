import {Observable} from 'rx';
import {artifact} from '../../../../react-bootstrapper';

export default async () => {
    const result = await Promise.resolve({test3: 2});
    return artifact(result);
}