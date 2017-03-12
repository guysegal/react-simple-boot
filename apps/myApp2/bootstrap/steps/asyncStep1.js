import {Observable} from 'rx';
import {artifact} from '../../../../react-simple-bootstrap';

export default async () => {
    const result = await Promise.resolve({test3: 2});
    return artifact(result);
}