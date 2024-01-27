interface GithubFiles {
    name: string,
    path: string,
    sha: string,
    size: number,
    url: string,
    html_url: string,
    git_url: string,
    download_url: string,
    type: string,
    _links: {
        self: string,
        git: string,
        html: string
    }
}
export default async function isValidLang(l: string) {
    const files: GithubFiles[] = await fetch('https://api.github.com/repos/lorypelli/Random-Number-Generator/contents/translations').then(async (f) => await f.json()).catch(() => {
        return false;
    });
    for (let i = 0; i < files.length; i++) {
        if (l == files[i].name.split('.')[0]) {
            return true;
        }
    }
    return false;
}