import classNamesOriginal from "classnames";
import { overrideTailwindClasses } from "tailwind-override";

export const classNamesCustom = (...args) =>
  overrideTailwindClasses(classNamesOriginal(...args));
