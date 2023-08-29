import { UseFieldArrayAppend } from "react-hook-form";

export interface ITitleNode {
    handleCancel:   () => void;
    append:         UseFieldArrayAppend;
}