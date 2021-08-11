import { FileHelper } from "./FileHelper";
import { Dungeon, ErrorRoom, DungeonValidator } from "./ValidateDungeons"
import { StructurMaskUtils, StructureMaskLineNumbers } from "./StructurMaskUtils"
import { ValidateLoreNote } from "./ValidateLoreNote";


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

const roomErrors = dungeonValidator.validateDungeons(mask.rooms);
const bossRoomsErrors = dungeonValidator.validateDungeons(mask.bossRooms);

if (roomErrors.length == 0 && bossRoomsErrors.length == 0) {
  console.log('Dungeons validation complete.');
}
else {
  const structureMaskLineNumbers: StructureMaskLineNumbers = StructurMaskUtils.getStructureMaskLineNumbers(maskStr);
  console.log('Found invalid dungeon rooms');
  roomErrors.forEach((e) => {
    printDungeonErrorInfo(e, 'rooms', structureMaskLineNumbers.rooms);
  });
  bossRoomsErrors.forEach((e) => {
    printDungeonErrorInfo(e, 'bossRooms', structureMaskLineNumbers.bossRooms);
  });
  throw new Error('Dungeons validation not successful!');
}
function printDungeonErrorInfo(e: ErrorRoom, type: string, lineNumbers: number[]) {
  const lineNumber = lineNumbers[e.roomNumber];
  console.log(JSON.stringify({ type: type, roomNumber: e.roomNumber, lineNumber: lineNumber, message: e.message }));
  console.log(dungeonToString(e));
  console.log('');
}
function dungeonToString(errorRoom: ErrorRoom): string {
  const preparedArray = errorRoom.dungeon.tiles.map(s => `"${s}"`);
  const partSize = preparedArray[0].length + 1;
  const lines = StructurMaskUtils.chunkString(preparedArray.join(','), partSize * 15);
  return lines.join('\n');
}
ValidateLoreNote.start();