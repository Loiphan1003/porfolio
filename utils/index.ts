export const getValueInLocalStorage = (name: string) => {
    const value = localStorage.getItem(name);
    if(value === null) return null;
    return value;
}

export const openNewPage = (url: string) => {
    return window.open(url, '_blank');
}