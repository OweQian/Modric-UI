import React from "react";
import { InputProps } from '../Input/input';
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect' | 'onChange'> {
    /**
     * 返回输入建议的方法，可以拿到当前的输入，然后返回同步的数组或者是异步的 Promise
     * type DataSourceType<T = {}> = T & DataSourceObject
     */
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    /** 点击选中建议项时触发的回调*/
    onSelect?: (item: DataSourceType) => void;
    /** 文本框发生改变的时候触发的事件*/
    onChange?: (value: string) => void;
    /**支持自定义渲染下拉项，返回 ReactElement */
    renderOption?: (item: DataSourceType) => React.ReactElement;
}
/**
 * 输入框自动完成功能。当输入值需要自动完成时使用，支持同步和异步两种方式
 * 支持 Input 组件的所有属性 支持键盘事件选择
 * ### 引用方法
 *
 * ~~~js
 * import { AutoComplete } from 'modric-ui'
 * ~~~
 */
export declare const AutoComplete: React.FC<AutoCompleteProps>;
export default AutoComplete;
