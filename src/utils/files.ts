import { readdirSync } from 'fs';
export function allFiles(f: string) {
    const files = readdirSync(f);
    const arr = [];
    for (let i = 0; i < files.length; i++) {
        arr.push(`${f}/${files[i]}`);
    }
    return arr;
}