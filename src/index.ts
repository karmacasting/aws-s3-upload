import { setCommandEcho, setFailed } from "@actions/core"
import { runBuild } from "./s3Upload"

export const run = async () => {
  setCommandEcho(true)
  console.log("*****Starting aws-s3-upload*****")
  const result = await runBuild()
  if (typeof result === "string") {
    setFailed(result)
  }
  console.log("*****Completed aws-s3-upload*****")
}

run()
