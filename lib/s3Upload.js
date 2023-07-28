"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBuild = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@actions/core");
const client_s3_1 = require("@aws-sdk/client-s3");
const fs_1 = tslib_1.__importDefault(require("fs"));
const githubInputs = () => {
    return {
        bucket: (0, core_1.getInput)("bucket", { required: true }),
        file: (0, core_1.getInput)("file", { required: true }),
        key: (0, core_1.getInput)("key", { required: true }),
    };
};
const runBuild = async () => {
    const inputs = githubInputs();
    console.log(inputs);
    const s3Client = new client_s3_1.S3Client({});
    try {
        const fileContent = fs_1.default.readFileSync(inputs.file, "utf-8");
        const result = await s3Client.send(new client_s3_1.PutObjectCommand({ Body: fileContent, Bucket: inputs.bucket, Key: inputs.key }));
        console.log(result);
        return;
    }
    catch (error) {
        console.log(error);
        return error instanceof Error ? error.message : "Unknown error";
    }
};
exports.runBuild = runBuild;
