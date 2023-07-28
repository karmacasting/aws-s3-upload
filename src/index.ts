import { setFailed } from "@actions/core"
import { runBuild } from "./s3Upload"

export const run = async () => {
  console.log("*****Starting aws-s3-upload*****")
  const result = runBuild()
  if (typeof result === "string") {
    setFailed(result)
  }
  console.log("*****Completed aws-s3-upload*****")
}
