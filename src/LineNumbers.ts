import { StructurMaskUtils } from "./StructurMaskUtils";
import { FileHelper } from './FileHelper';

const maskStr = FileHelper.getFile('./contribution/dungeon/layout/structure-mask.json');
StructurMaskUtils.printRoomsToLineNumberInfo(StructurMaskUtils.getStructureMaskLineNumbers(maskStr));