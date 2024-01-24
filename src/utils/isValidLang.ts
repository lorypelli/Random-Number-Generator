import fs from 'fs';
export default function isValidLang(l: string) {
    const devDirectory = './public/translations/';
    const prodDirectory = './translations/';
    const files = fs.existsSync(prodDirectory) ? fs.readdirSync(prodDirectory) : fs.readdirSync(devDirectory);
    for (let i = 0; i < files.length; i++) {
        if (l == files[i].split('.')[0]) {
            return true;
        }
    }
    return false;
}