import { readFiles, checkDiffs, writeToFile } from './rsnUtil'
import colors from 'colors/safe'

const keys = readFiles()
checkDiffs(keys)
  .then(data => {
    console.log(('---------------------------------------'))
    writeToFile(data)
    console.log(`${colors.bold('All file diffs have been locked!')} Commit changed cache.json to git.`)
  })
  .catch(err => {
    // Violation 1
    console.log(err)
    // Violation 2
    console.log(err)
    // Violation 3
    console.log(err)
    process.exitCode = 1
  })
