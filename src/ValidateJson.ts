import { FileHelper } from "./FileHelper";
import {Dungeon, ErrorRoom, DungeonValidator } from "./ValidateDungeons"


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

const maskStr = FileHelper.getFile('./contribution/dungeon/layout/structure-mask.json');
const mask: { rooms: Dungeon[], bossRooms: Dungeon[] } = JSON.parse(maskStr);

const dungeonValidator = new DungeonValidator(15);

const errors: ErrorRoom[] = [];

errors.push(...dungeonValidator.validateDungeons(mask.rooms, 'rooms'));
errors.push(...dungeonValidator.validateDungeons(mask.bossRooms, 'bossRooms'));

if (errors.length == 0) {
    console.log('Dungeons validation complete.')
}
else {
  addLineNumbersToErrors(errors, maskStr);
    console.error('Found invalid dungeon rooms');
    errors.forEach((e) => {
      console.error(e);
    })
    throw new Error(`Dungeons validation not successful! errors: ${JSON.stringify(errors)}`);
}

function addLineNumbersToErrors(errorRooms: ErrorRoom[], maskStr: string) {
  const splitLines = maskStr.split(/\r?\n/);
  const preparedSplitted = splitLines.map((s, i) => {
    const searchRegExp = /"tiles"\s*:/g;
    const replaceWith = `"lineNumber": ${i + 1},"tiles":`;
    const replaced = s.replace(searchRegExp, replaceWith);
    return replaced;
  });
  const prepared = preparedSplitted.join('\n');
  const dungeonsWithLineNumber: { rooms: DungeonWithLineNumber[], bossRooms: DungeonWithLineNumber[] } = JSON.parse(prepared);

  errorRooms.forEach((e) => {
    e['lineNumber'] = getLineNumber(e, dungeonsWithLineNumber);
  });
}
function getLineNumber(errorRoom: ErrorRoom, dungeonsWithLineNumber: { rooms: DungeonWithLineNumber[], bossRooms: DungeonWithLineNumber[] }): number {
  const dungeonWithLineNumber: DungeonWithLineNumber[] = dungeonsWithLineNumber[errorRoom.type];
  return dungeonWithLineNumber[errorRoom.roomNumber].lineNumber;
}
interface DungeonWithLineNumber extends Dungeon {
  lineNumber: number
}