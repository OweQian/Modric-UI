import React from 'react';
import Menu from './menu';
import SubMenu from './subMenu'
import MenuItem from './menuItem'

import { ComponentMeta, ComponentStory } from '@storybook/react';

const menuMeta: ComponentMeta<typeof Menu> = {
  title: 'Menu',
  id: 'Menu',
  component: Menu,
  subcomponents: {
    'SubMenu': SubMenu,
    'MenuItem': MenuItem
  },
  args: {
    defaultIndex: '0',
  },
  argTypes: {
    defaultIndex: {
      control: 'color'
    }
  },
  parameters: {
    controls: {
      matchers: {
        date: /mode$/
      }
    }
  }
}

export default menuMeta

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
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

export const DefaultMenu = Template.bind({})

export const VerticalMenu = Template.bind({})
VerticalMenu.args = {
  defaultIndex: '1',
  mode: 'vertical'
}
