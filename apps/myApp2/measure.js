export const measure = (repoter) => (name, func) => {
    return async (args) => {
        repoter();
        return func(args);
    };
}

export const withReporter = () => console.log("stam reporting!");
