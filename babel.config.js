module.exports = api => {
    const defaultConfig = api.env('Config');
    const targets = {
        browsers: [" >= 0.5%, last 2 major versions, not dead, Chrome >= 60, Firefox >= 60, Firefox ESR, iOS >= 12, Safari >= 12, not Explorer <= 11"]
    };
    if (defaultConfig) {
        delete targets.browsers;
        targets.node = "current";
    };
    return {
        "presets": [
            ["@babel/env", {
                "useBuiltIns": "entry",
                "corejs": "3.0.0",
                targets
            }], "@babel/typescript"
        ],
        "plugins": ["@babel/proposal-class-properties", "@babel/proposal-object-rest-spread"]
    };
};