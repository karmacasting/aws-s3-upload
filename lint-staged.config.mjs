/* eslint-env node */
import micromatch from "micromatch"

export default {
  "*.json": ["prettier --write", "sortier"],
  "*.{css,html,md,scss,yaml,yml}": ["prettier --write", "sortier --ignore-unknown"],
  "*.{js,jsx,ts,tsx}": (files) => {
    const matches = micromatch.not(files, ["**/dist/*"])
    return [`eslint --fix --max-warnings 0 ${matches.join(" ")}`, `sortier ${files.join(" ")}`]
  },
}
