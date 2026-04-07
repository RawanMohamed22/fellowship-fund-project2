import type { ReactNode } from "react";
import type { RegisterName } from "../types";

export interface IRegisterFormFields {
    placeHolder : string;
    type : string;
    Name : RegisterName;
    icon : ReactNode;
}