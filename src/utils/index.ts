export const darkBackgroundColor = (theme: any, index: number) => {
    return index === 0 ? theme.palette.primary.main : index === 1 ?
    theme.palette.success.dark : index === 2 ?
        theme.palette.orange.main : theme.palette.error.dark;
};

export const lightBackgroundColor = (theme: any, index: number) => {
    return index === 0 ? theme.palette.blue.main : index === 1 ?
    theme.palette.success.main : index === 2 ?
        theme.palette.orange.light : theme.palette.error.main;
};