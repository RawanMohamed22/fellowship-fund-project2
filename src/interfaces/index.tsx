import type { ReactNode } from "react";
import type { LoginName, RegisterName } from "../types";

export interface IRegisterFormFields {
    placeHolder : string;
    type : string;
    Name : RegisterName;
    icon : ReactNode;
}

export interface ILoginFormFields {
    placeHolder : string;
    type : string;
    Name : LoginName;
    icon : ReactNode;
}

export interface IError{
    errors ?: Record<string , string[]>
    message ? : string
}