import React from 'react';
import Select from './select';
import { SelectOptionProps } from './option';
export declare type ISelectComponent = typeof Select & {
    Option: React.FC<SelectOptionProps>;
};
declare const TransSelect: ISelectComponent;
export default TransSelect;
