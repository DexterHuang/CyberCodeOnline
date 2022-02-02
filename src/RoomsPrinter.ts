import { FileHelper } from "./FileHelper";
import { Dungeon } from './ValidateDungeons';
import { StructurMaskUtils, StructureMaskLineNumbers } from './StructurMaskUtils';


const maskStr = FileHelper.getFile('./contribution/dungeon/layout/structure-mask.json');
const mask: { rooms: Dungeon[], bossRooms: Dungeon[] } = JSON.parse(maskStr);
const structureMaskLineNumbers: StructureMaskLineNumbers = StructurMaskUtils.getStructureMaskLineNumbers(maskStr);

console.log("=== ROOMS ===");
console.log("");
for (let i = 0; i < mask.rooms.length; ++i) {
    console.log(`=== ROOM ${i} at line ${structureMaskLineNumbers.rooms[i]}`);
    console.log("");
    console.log(dungeonToString(mask.rooms[i]));
    console.log("");
    console.log("");
}


console.log("=== BOSS ROOMS ===");
console.log("");
for (let i = 0; i < mask.bossRooms.length; ++i) {
    console.log(`=== ROOM ${i} at line ${structureMaskLineNumbers.bossRooms[i]}`);
    console.log("");
    console.log(dungeonToString(mask.bossRooms[i]));
    console.log("");
    console.log("");
}

function dungeonToString(room: Dungeon): string {
    const partSize = room.tiles[0].length + 1;
    const lines = StructurMaskUtils.chunkString(room.tiles.join(' '), partSize * 15);
    return lines.join('\n');
}