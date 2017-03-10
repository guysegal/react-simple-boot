export default (name, func) => {
    return async (args) => {
        console.time(name)
        const result = func(args);
        if (result && result.then) {
            const promiseResult = await result;
            console.timeEnd(name);
            return promiseResult;
        }
        console.timeEnd(name);
        return result;        
    };
}