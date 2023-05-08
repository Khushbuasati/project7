export default function themePalette(theme: any) {
    return {
        mode: theme?.customization?.navType,
        common: {
            black: theme.colors?.darkPaper,
        },
        primary: {
            light: theme.colors?.primaryLight,
            main: theme.colors?.primaryMain,
            dark: theme.colors?.primaryDark,
            200: theme.colors?.primary200,
            contrastText: theme.colors?.primary800
        },
        secondary: {
            light: theme.colors?.secondaryLight,
            main: theme.colors?.secondaryMain,
            dark: theme.colors?.secondaryDark,
            200: theme.colors?.secondary200,
            800: theme.colors?.secondary800
        },
        orange: {
            light: theme.colors?.orangeLight,
            main: theme.colors?.orangeMain,
            dark: theme.colors?.orangeDark
        },
        success: {
            light: theme.colors?.successLight,
            main: theme.colors?.successMain,
            dark: theme.colors?.successDark
        },
        error: {
            light: theme.colors?.errorLight,
            main: theme.colors?.errorMain,
            dark: theme.colors?.errorDark
        },
        grey: {
            500: theme.darkTextSecondary,
        },
        background: {
            paper: theme.paper,
            default: theme.colors.background
        },
        blue: {
            light: theme.colors?.blueLight,
            main: theme.colors?.blueMain,
        },
        yellow: {
            main: theme.colors?.yellowMain
        }
    };
}