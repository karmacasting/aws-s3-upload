"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const core_1 = require("@actions/core");
const s3Upload_1 = require("./s3Upload");
const run = async () => {
    (0, core_1.setCommandEcho)(true);
    console.log("*****Starting aws-s3-upload*****");
    const result = await (0, s3Upload_1.runBuild)();
    if (typeof result === "string") {
        (0, core_1.setFailed)(result);
    }
    console.log("*****Completed aws-s3-upload*****");
};
exports.run = run;
