import * as PF from 'pathfinding'

export class DungeonValidator {

    private readonly middle: number;

    public constructor(private readonly size: number) {
        this.middle = Math.floor(size / 2);
    }

    public validateDungeons(dungeons: Dungeon[]): ErrorRoom[] {

        const errors: ErrorRoom[] = [];
        const dungeonMap = new Map();

        let index = 0;

        for (const dungeon of dungeons) {
            try {
                const key = this.validateAndGenerateKey(dungeon);
                if (dungeonMap.has(key)) {
                    errors.push({
                        roomNumber: index,
                        message: `Duplicate found! room number ${index} is a duplicate of room number ${dungeonMap.get(key)}!`, dungeon: dungeon
                    });
                }
                else {
                    dungeonMap.set(key, index);
                }
            }
            catch (e) {
                errors.push({
                    roomNumber: index, message: e.message, dungeon: dungeon
                });
            }

            ++index;
        }

        return errors;
    }
    private validateAndGenerateKey(dungeon: Dungeon): string {

        if (!dungeon || !dungeon.tiles) {
            throw new Error(`Dungeon is not valid! Cannot find tiles!`);
        }

        if (dungeon.tiles.length != this.size * this.size) {
            throw new Error(`Dungeon is not valid! Length is ${dungeon.tiles.length}! Should be ${this.size * this.size}!`);
        }

        const layout = [];
        for (let i = 0; i < this.size; ++i) {
            layout.push([]);
        }
        for (let i = 0; i < dungeon.tiles.length; ++i) {
            if (dungeon.tiles[i] !== ' ' && dungeon.tiles[i] !== '#') {
                throw new Error(`Tiles has a unkown character! possible character: " ", "#"`);
            }
            const x = i % this.size;
            const y = Math.floor(i / this.size);
            const value = dungeon.tiles[i] === '#';
            if (this.isBorder(x, y) && !value) {
                throw new Error(`Border is not correct! (${x},${y})`);
            }
            if (this.isDoor(x, y) && value) {
                throw new Error(`Doors are not correct! (${x},${y})`);
            }
            layout[x][y] = value;
        }

        this.validateLayout(layout);
        return this.generateKey(layout);
    }

    private validateLayout(layout: boolean[][]) {

        const doors = [[0, this.middle], [this.middle, 0], [this.size - 1, this.middle], [this.middle, this.size - 1]];
        const validationField = doors[0];

        if (!this.hasPathForTargets(layout, validationField, doors.slice(1))) {
            throw new Error(`Not all doors are connected!`);
        }

        const fields = [];

        for (let x = 0; x < this.size; ++x) {
            for (let y = 0; y < this.size; ++y) {
                if (!layout[x][y] && !this.isDoor(x, y)) {
                    fields.push([x, y]);
                }
            }
        }

        if (!this.hasPathForTargets(layout, validationField, fields)) {
            throw new Error(`Not all free fields are connected!`);
        }
    }

    private hasPathForTargets(layout: boolean[][], start: number[], targets: number[][]): boolean {

        const matrix = [];
        for (let y = 0; y < this.size; ++y) {
            const row = [];
            for (let x = 0; x < this.size; ++x) {
                row.push((layout[x][y]) ? 1 : 0);
            }
            matrix.push(row);
        }

        const finder = new PF.BestFirstFinder();
        const grid = new PF.Grid(matrix);

        for (const target of targets) {
            if (start[0] == target[0] && start[1] == target[1]) {
                continue;
            }
            const hasPath = finder.findPath(start[0], start[1], target[0], target[1], grid.clone());
            if (hasPath.length == 0) {
                return false;
            }
        }

        return true;
    }

    private generateKey(layout: boolean[][]): string {
        let key = '';
        for (let y = 0; y < this.size; ++y) {
            let part = '';
            for (let x = 0; x < this.size; ++x) {
                part += (layout[x][y]) ? '1' : '0';
            }
            key += this.bin2String(part);
        }
        return key;
    }

    private bin2String(str: string) {
        return String.fromCharCode(parseInt(str, 2));
    }

    private isDoor(x: number, y: number) {
        return (x == 0 && y == this.middle) || (x == this.size - 1 && y == this.middle) || (y == 0 && x == this.middle) || (y == this.size - 1 && x == this.middle);
    }

    private isBorder(x: number, y: number) {
        return (x == 0 || y == 0 || x == this.size - 1 || y == this.size - 1) && !this.isDoor(x, y);
    }
}

export interface Dungeon {
    tiles: [string]
}

export interface ErrorRoom {
    roomNumber: number,
    message: string,
    dungeon: Dungeon
}