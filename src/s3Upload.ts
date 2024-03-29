import { getInput } from "@actions/core"
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import fs from "fs"

const githubInputs = () => {
  return {
    bucket: getInput("bucket", { required: true }),
    contentType: getInput("contentType"),
    file: getInput("file", { required: true }),
    key: getInput("key", { required: true }),
  }
}

export const runBuild = async (): Promise<string | void> => {
  const inputs = githubInputs()
  console.log("v2-20240201")
  console.log(inputs)
  const s3Client = new S3Client({})
  try {
    const fileBuffer = fs.readFileSync(inputs.file)
    const result = await s3Client.send(
      new PutObjectCommand({
        Body: fileBuffer,
        Bucket: inputs.bucket,
        ContentType: inputs.contentType,
        Key: inputs.key,
      }),
    )
    console.log(result)
    return
  } catch (error) {
    console.log(error)
    return error instanceof Error ? error.message : "Unknown error"
  }
}
