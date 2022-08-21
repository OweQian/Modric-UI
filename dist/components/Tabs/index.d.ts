import React from 'react';
import Tabs from './tabs';
import { TabItemProps } from './tabItem';
export declare type ITabsComponent = typeof Tabs & {
    Item: React.FC<TabItemProps>;
};
declare const TransTabs: ITabsComponent;
export default TransTabs;
