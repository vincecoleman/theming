import { createTheme } from ".";
import { RecursivePartial } from "../types";
import { ITheme } from "./themes.types";

const CompHealthTheme: RecursivePartial<ITheme> = {
    colors: {
        primary: "purple",
        secondary: "blue",
    }
}


export default createTheme(CompHealthTheme)