import { FileHelper } from "./FileHelper";


const paths = FileHelper.getAllFiles('./contribution').filter(fileName => fileName.endsWith('.json'));

let index = 1;
for (const path of paths) {
  try {
    const str = FileHelper.getFile(path);
    JSON.parse(str);
    console.log(`(${index}/${paths.length}) ${path} valid`)
    index++;
  } catch (e) {
    throw new Error(`${path} is invalid JSON, ${e}`);
  }
}
console.log(`JSON Validation complete.`)