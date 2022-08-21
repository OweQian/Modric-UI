import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Tabs from './index';
import Icon from '../Icon'

const TabsMeta: ComponentMeta<typeof Tabs> = {
  title: 'Tabs',
  id: 'Tabs',
  component: Tabs,
  subcomponents: {
    'TabItem': Tabs.Item
  }
}

export default TabsMeta

export const ADefaultTabs: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tabs.Item label="选项卡一">this is content one</Tabs.Item>
    <Tabs.Item label="选项卡二">this is content two</Tabs.Item>
    <Tabs.Item label="用户管理">this is content three</Tabs.Item>
  </Tabs>
)
ADefaultTabs.storyName = 'Default'

export const BCardTabs: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args} type="card">
    <Tabs.Item label='card1'>this is card one</Tabs.Item>
    <Tabs.Item label="card2">this is content two</Tabs.Item>
    <Tabs.Item label="disabled" disabled>this is content three</Tabs.Item>
  </Tabs>
)
BCardTabs.storyName = 'Card'

export const CCustomTabs: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args} type="card">
    <Tabs.Item label={<><Icon icon="check-circle" />  自定义图标</>}>this is card one</Tabs.Item>
    <Tabs.Item label="tab2">this is content two</Tabs.Item>
  </Tabs>
)
CCustomTabs.storyName = 'Custom'