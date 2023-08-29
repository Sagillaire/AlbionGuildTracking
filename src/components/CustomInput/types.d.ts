import { IMapRouteResponse } from "@/core";
import { ReactNode } from "react";
import type { Control, FieldError, DefaultValues, RegisterOptions } from "react-hook-form";

export interface ICustomInput {
    onClick?: () =>     void;
    label:              string;
    format?:            string;
    btnLabel?:          string;
    name:               string;
    placeholder?:       string;
    loading?:           boolean;
    disabled?:          boolean;
    prefix?:            ReactNode;
    type?:              TTypeOptions;
    control:            Control<T>;
    errors?:            FieldErrors<T>;
    defaultValue?:      DefaultValues<T>;
    rules?:             RegisterOptions<T>;
}

type TTypeOptions = 'time' | 'password'
