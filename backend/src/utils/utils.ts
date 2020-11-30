

export const getRepoNameFromUrl = (url: string) => {
    if(!url) return '';
    const parts = url.split('/');
    return parts[5];
}