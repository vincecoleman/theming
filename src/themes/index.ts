import { RecursivePartial } from "../types";
import DefaultTheme from "./defaultTheme";
import { ITheme } from "./themes.types";

export const createTheme = (theme: RecursivePartial<ITheme>) => {
    return {
        colors: { ...DefaultTheme.colors, ...theme.colors }
    }
}