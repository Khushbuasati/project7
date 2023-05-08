import { ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module '@mui/material/styles' {
    interface Palette {
        blue: {
            light: React.CSSProperties['color'],
            main: React.CSSProperties['color'],
        },
        orange: {
            light: React.CSSProperties['color'],
            main: React.CSSProperties['color'],
        },
        purple: {
            main: React.CSSProperties['color'],
        },
        yellow: {
            main: React.CSSProperties['color'],
        }
    }
}