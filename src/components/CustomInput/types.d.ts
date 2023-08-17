import { ReactNode } from "react";
import { Control, FieldError, DefaultValues, RegisterOptions } from "react-hook-form";

export interface ICustomInput {
    onClick?: () =>     void;
    btnLabel?:          string;
    name:               string;
    placeholder?:       string;
    control:            Control;
    loading?:           boolean;
    disabled?:          boolean;
    prefix?:            ReactNode;
    errors?:            FieldError;
    type?:              TTypeOptions;
    defaultValue?:      DefaultValues;
    rules?:             RegisterOptions;
}

type TTypeOptions = 'password'
