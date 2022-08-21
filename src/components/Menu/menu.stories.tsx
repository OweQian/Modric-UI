import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Menu from './index';

const menuMeta: ComponentMeta<typeof Menu> = {
  title: 'Menu',
  id: 'Menu',
  component: Menu,
  subcomponents: {
    'SubMenu': Menu.SubMenu,
    'MenuItem': Menu.Item
  }
}

export default menuMeta

export const ADefaultMenu: ComponentStory<typeof Menu> = (args) => (
  <Menu defaultIndex='0' {...args} >
    <Menu.Item>
      cool link
    </Menu.Item>
    <Menu.Item>
      cool link 2
    </Menu.Item>
    <Menu.Item disabled>
      disabled
    </Menu.Item>
    <Menu.SubMenu title="下拉选项">
      <Menu.Item>
        下拉选项一
      </Menu.Item>
      <Menu.Item>
        下拉选项二
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
)
ADefaultMenu.storyName = 'Default'

export const BClickMenu: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} defaultIndex='0' mode="vertical">
    <Menu.Item>
      cool link
    </Menu.Item>
    <Menu.Item>
      cool link 2
    </Menu.Item>
    <Menu.SubMenu title="点击下拉选项">
      <Menu.Item>
        下拉选项一
      </Menu.Item>
      <Menu.Item>
        下拉选项二
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
)
BClickMenu.storyName = 'Vertical'

export const COpenedMenu:ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} defaultIndex='0' mode="vertical" defaultOpenSubMenus={['2']}>
    <Menu.Item>
      cool link
    </Menu.Item>
    <Menu.Item>
      cool link 2
    </Menu.Item>
    <Menu.SubMenu title="默认展开下拉选项">
      <Menu.Item>
        下拉选项一
      </Menu.Item>
      <Menu.Item>
        下拉选项二
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
)
COpenedMenu.storyName = 'More'
