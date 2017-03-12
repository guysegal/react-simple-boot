import {Observable} from 'rx';
import {artifact} from '../../../../react-simple-bootstrap';

export default async () => {
    const result = await Promise.resolve({test4: 2});
    return artifact(result);
}