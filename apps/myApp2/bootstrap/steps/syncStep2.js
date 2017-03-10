import {artifact} from '../../../../react-simple-boot';

export default ({test1}) => {
    console.log("received test1 param: ", test1)
    return artifact({test2: 1});
}