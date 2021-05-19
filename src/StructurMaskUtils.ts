export namespace StructurMaskUtils {

    export function chunkString(str: string, length: number) {
        return str.match(new RegExp('.{1,' + length + '}', 'g'));
    }

    export function printRoomsToLineNumberInfo(structureMaskLineNumbers: StructureMaskLineNumbers) {
        structureMaskLineNumbers.rooms.map((l, i) => `  rooms -> roomNumber: ${i} -> lineNumber: ${l}`).forEach(s => console.log(s));
        structureMaskLineNumbers.bossRooms.map((l, i) => `  bossRooms -> roomNumber: ${i} -> lineNumber: ${l}`).forEach(s => console.log(s));
    }

    export function normalizeStructureMask(maskString: string): string {
        const json = JSON.parse(maskString);
        const jsonString = JSON.stringify(json, null, '    ');
        const splitLines = jsonString.split(/\r?\n/);
        let newMaskString = '';
        const arrayContent: string[] = [];
        for (const line of splitLines) {
            if (/^(( *" ")|( *"#")),?$/.test(line)) {
                arrayContent.push(line);
            }
            else {
                if (arrayContent.length > 0) {
                    let arrayString = '';
                    const indent = arrayContent[0].match(/^ */)[0];
                    const partSize = arrayContent[0].trim().length + 1;
                    const singleLine = arrayContent.map(c => c.trim()).join(' ');
                    chunkString(singleLine, partSize * 15).forEach((s) => {
                        arrayString += `${indent}${s.trim()}\n`
                    })
                    newMaskString += arrayString;
                    arrayContent.length = 0;
                }
                newMaskString += `${line}\n`;
            }
        }
        return newMaskString.slice(0, -1);
    }

    export function getStructureMaskLineNumbers(maskString: string): StructureMaskLineNumbers {
        const splitLines = maskString.split(/\r?\n/);
        const preparedSplitted = splitLines.map((s, i) => {
          const searchRegExp = /"tiles"\s*:/g;
          const replaceWith = `"lineNumber": ${i + 1},"tiles":`;
          const replaced = s.replace(searchRegExp, replaceWith);
          return replaced;
        });
        const prepared = preparedSplitted.join('\n');
        const json: { rooms: { lineNumber: number }[], bossRooms: { lineNumber: number }[] } = JSON.parse(prepared);
        const structureMaskLineNumbers: StructureMaskLineNumbers = {
            rooms: [],
            bossRooms: []
        };
        json.rooms.forEach(e => structureMaskLineNumbers.rooms.push(e.lineNumber));
        json.bossRooms.forEach(e => structureMaskLineNumbers.bossRooms.push(e.lineNumber));
        return structureMaskLineNumbers;
    }
}

export interface StructureMaskLineNumbers {
    rooms: number[]
    bossRooms: number[]
}