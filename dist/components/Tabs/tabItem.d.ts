import React from 'react';
export interface TabItemProps {
    /** Tab选项上面的文字 */
    label: string | React.ReactElement;
    /** Tab选项是否被禁用 */
    disabled?: boolean;
    children?: React.ReactNode;
}
export declare const TabItem: React.FC<TabItemProps>;
export default TabItem;
