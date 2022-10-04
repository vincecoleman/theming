import { createTheme } from ".";
import { RecursivePartial } from "../types";
import DefaultTheme from "./defaultTheme";
import { ITheme } from "./themes.types";

const CompHealthTheme: RecursivePartial<ITheme> = {
    colors: {
        primary: "red",
        secondary: "teal",
        warning: "maroon"
    }
}


export default createTheme(CompHealthTheme)