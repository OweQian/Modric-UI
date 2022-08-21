import React from 'react';
import Menu from './menu';
import SubMenu, { SubMenuProps } from './subMenu';
import MenuItem, { MenuItemProps } from './menuItem';

export type IMenuComponent = typeof Menu & {
  Item: React.FC<MenuItemProps>,
  SubMenu: React.FC<SubMenuProps>
}

const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu