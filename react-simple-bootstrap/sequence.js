export default async (steps) => {
    let artifacts = {};
    let disposables = [];    
    for (step of steps) {
        let output;
        if (step.type === "parallel") {
            parallelresult = await step.run(artifacts) || {};
            artifacts = {...artifacts, ...parallelresult.artifacts};
            disposables = [...disposables, parallelresult.disposables];
        }
        else {
            result = await Promise.resolve().then(() => {
                return step(artifacts) || {}
            });
            if (result && result.type === "disposable") {
                disposables = [...disposables, result.value];
            }
            if (result && result.type === "artifact") {
                artifacts = {...artifacts, ...result.value};
            }            
        }        
    }
    return {artifacts, disposables};
}