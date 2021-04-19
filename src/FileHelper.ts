
import * as fs from "fs";

export class FileHelper {

  static getAllFiles(dir: string, fileList: string[] = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const path = `${dir}/${file}`;
      if (fs.lstatSync(path).isDirectory()) {
        fileList.push(...this.getAllFiles(path));
      } else {
        fileList.push(path);
      }
    }
    return fileList;
  }
  static getFile(path: string) {
    return fs.readFileSync(path) + '';
  }

  static writeToFile(path: string, str: string) {
    fs.writeFileSync(path, str);
  }
}