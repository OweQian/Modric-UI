import React from 'react';
import Menu from './menu';
import { SubMenuProps } from './subMenu';
import { MenuItemProps } from './menuItem';
export declare type IMenuComponent = typeof Menu & {
    Item: React.FC<MenuItemProps>;
    SubMenu: React.FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
