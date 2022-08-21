import React from 'react';
import { CustomRule } from './useStore';
export declare type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;
export interface FormItemProps {
    /**字段名 */
    name: string;
    /**label 标签的文本 */
    label?: string;
    children?: React.ReactNode;
    /**子节点的值的属性，如 checkbox 的是 'checked' */
    valuePropName?: string;
    /**设置收集字段值变更的时机 */
    trigger?: string;
    /**设置如何将 event 的值转换成字段值 */
    getValueFromEvent?: (event: any) => any;
    /**校验规则，设置字段的校验逻辑。请看 async validator 了解更多规则 */
    rules?: CustomRule[];
    /**设置字段校验的时机 */
    validateTrigger?: string;
}
export declare const FormItem: React.FC<FormItemProps>;
export default FormItem;
