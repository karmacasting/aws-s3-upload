"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBuild = void 0;
const core_1 = require("@actions/core");
const githubInputs = () => {
    return {
        bucket: (0, core_1.getInput)("bucket", { required: true }),
        file: (0, core_1.getInput)("file", { required: true }),
        key: (0, core_1.getInput)("key", { required: true }),
        region: (0, core_1.getInput)("region", { required: true }),
    };
};
const runBuild = async () => {
    console.log(githubInputs());
    return;
};
exports.runBuild = runBuild;
