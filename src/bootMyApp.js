import {CompositeDisposable} from 'rx';

const subBoot1 = () => {
    return Promise.resolve({x: 1});
}
const subBoot2 = (x1) => {
    return Promise.resolve({x: 2});
}
const subBoot3 = () => {
    return Promise.resolve({x: 3});
}
const subBoot4 = () => {
    return Promise.resolve({
      artifacts: () => {return 1},
      dispose: () => console.log("dispose!")      
    })
}

const bootApp = async () => {
  const x1 = await subBoot1();
  const x2 = await subBoot2(x1);
  const x3 = await subBoot3();
  const x4 = await subBoot4(x1);
  return bootstrapResult([x1, x2, x3, x4]);
}

const extractArtifcats = (result) => result.artifacts || result || {}
const extractDispose = (result) => result.dispose || () => {}
const bootstrapResult = (results) => {
    return {
      artifacts: {...extractArtifcats(results[0]), ...extractArtifcats(results[1]), ...extractArtifcats(results[2])},
      dispose: new CompositeDisposable([extractDispose(results[0]), extractDispose(results[1]), extractDispose(results[2])]);
    }
}