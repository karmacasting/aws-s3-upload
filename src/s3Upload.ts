import { getInput } from "@actions/core"

const githubInputs = () => {
  return {
    bucket: getInput("bucket", { required: true }),
    file: getInput("file", { required: true }),
    key: getInput("key", { required: true }),
    region: getInput("region", { required: true }),
  }
}

export const runBuild = async (): Promise<string | void> => {
  console.log(githubInputs())
  return
}
