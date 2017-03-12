export default (steps) => {
    return {
        type: "parallel",
        run: async (input) => {
          const promises = steps.map(s => Promise.resolve().then(() => s(input)));
          const results = await Promise.all(promises);
          let artifacts = {};
          let disposables = [];          
          for (const result of results) {
              if (result && result.type === "artifact") {
                  artifacts = {...artifacts, ...result.value}
              }
             if (result && result.type === "disposable") {
                 disposables = [...disposables, result.value];
             }                            
          }
          return {artifacts, disposables};
        }
    }
}