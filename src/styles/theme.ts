const lightTheme = {
    colors: {
        primary: '#ff1ff4',
        secondary: '#1ff4ff',
        background: '#ffffff',
        text: '#000000',
        accents: {
            banana: '#ffd93d',
            pumpkin: '#ff6b35',
            apple: '#ff4757',
            grass: '#2ed573',
            storm: '#3742fa',
        }
    },
    gap: (v: number) => v * 8
}

const darkTheme = {
    colors: {
        primary: '#aa12ff',
        secondary: 'pink',
        background: '#000000',
        text: '#ffffff',
        backgroundColor: '#121212',
        accents: {
            banana: '#ffd93d',
            pumpkin: '#ff6b35',
            apple: '#ff4757',
            grass: '#2ed573',
            storm: '#3742fa',
        }
    },
    gap: (v: number) => v * 8
}

export const appThemes = {
    light: lightTheme,
    dark: darkTheme
}

export const breakpoints = {
    xs: 0 as const,
    sm: 300 as const,
    md: 500 as const,
    lg: 800 as const,
    xl: 1200 as const
}

type AppBreakpoints = typeof breakpoints
type AppThemes = typeof appThemes

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes {}
    export interface UnistylesBreakpoints extends AppBreakpoints {}
}
