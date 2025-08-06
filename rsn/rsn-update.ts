import { readFiles, checkDiffs, writeToFile } from './rsnUtil'
import colors from 'colors/safe'

const keys = readFiles()
checkDiffs(keys)
  .then(data => {
    console.log(('---------------------------------------'))
    writeToFile(data)
  })
  .catch(err => {
    process.exitCode = 1
  })
  //
