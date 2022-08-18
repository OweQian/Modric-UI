import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Menu from './menu';
import SubMenu from './subMenu'
import MenuItem from './menuItem'

const menuMeta: ComponentMeta<typeof Menu> = {
  title: 'Menu',
  id: 'Menu',
  component: Menu,
  subcomponents: {
    'SubMenu': SubMenu,
    'MenuItem': MenuItem
  }
}

export default menuMeta

export const ADefaultMenu: ComponentStory<typeof Menu> = (args) => (
  <Menu defaultIndex='0' {...args} >
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem>
      cool link 2
    </MenuItem>
    <MenuItem disabled>
      disabled
    </MenuItem>
    <SubMenu title="下拉选项">
      <MenuItem>
        下拉选项一
      </MenuItem>
      <MenuItem>
        下拉选项二
      </MenuItem>
    </SubMenu>
  </Menu>
)
ADefaultMenu.storyName = 'Default'

export const BClickMenu: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} defaultIndex='0' mode="vertical">
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem>
      cool link 2
    </MenuItem>
    <SubMenu title="点击下拉选项">
      <MenuItem>
        下拉选项一
      </MenuItem>
      <MenuItem>
        下拉选项二
      </MenuItem>
    </SubMenu>
  </Menu>
)
BClickMenu.storyName = 'Vertical'

export const COpenedMenu:ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} defaultIndex='0' mode="vertical" defaultOpenSubMenus={['2']}>
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem>
      cool link 2
    </MenuItem>
    <SubMenu title="默认展开下拉选项">
      <MenuItem>
        下拉选项一
      </MenuItem>
      <MenuItem>
        下拉选项二
      </MenuItem>
    </SubMenu>
  </Menu>
)
COpenedMenu.storyName = 'More'
