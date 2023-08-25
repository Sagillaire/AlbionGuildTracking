export interface OptionType {
    label:      string;
    color?:     string;
    value:      string | number;
}

export interface ISelect {
    name:           string;
    label:          string;
    isMulti?:       boolean;
    disabled?:      boolean;
    loading?:       boolean;
    control:        Control;
    errors?:        FieldError;
    options?:       OptionType[];
    defaultValue?:  DefaultValues;
    rules?:         RegisterOptions;
    styles?:        StylesConfig<OptionType>
}