import { readdirSync } from 'fs';
export default function isValidLang(l: string) {
    const files = readdirSync('./translations');
    for (let i = 0; i < files.length; i++) {
        if (l == files[i].split('.')[0]) {
            return true;
        }
    }
    return false;
}