

import * as fs from 'fs';


export class ValidateLoreNote {

  static start() {
    const notesJson = JSON.parse(fs.readFileSync('contribution/notes/index.json') + '');
    const fileNames: string[] = notesJson.items;
    for (const fileName of fileNames) {
      const content = fs.readFileSync(`contribution/notes/files/${fileName}.md`) + ''
      if (!content) {
        throw new Error(`Lore note file ${fileName}.md exists in notes/index.json but does not exist in notes/files/${fileName}.md`);
      }
    }
    console.log("Lore notes validation complete.")
  }
}