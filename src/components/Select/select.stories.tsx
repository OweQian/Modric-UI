import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Select from './select'
import Option from './option'

const SelectMeta: ComponentMeta<typeof Select> = {
  title: 'Select',
  component: Select,
  id: 'Select',
  subcomponents: { 'Option': Option }
}

export default SelectMeta

export const ADefaultSelect: ComponentStory<typeof Select> = (args) => (
  <Select
    {...args}
    placeholder="请选择"
  >
    <Option value="nihao" />
    <Option value="nihao2" />
    <Option value="nihao3" />
    <Option value="disabled" disabled/>
    <Option value="nihao5" />
  </Select>
)
ADefaultSelect.storyName = 'Default'

export const BMultipleSelect: ComponentStory<typeof Select> = (args) => (
  <Select
    {...args}
    placeholder="支持多选"
    multiple
  >
    <Option value="nihao" />
    <Option value="nihao2" />
    <Option value="nihao3" />
    <Option value="viking" />
    <Option value="viking2" />
  </Select>
)
BMultipleSelect.storyName = 'Multiple'

export const CDisabledSelect: ComponentStory<typeof Select> = (args) => (
  <Select
    {...args}
    placeholder="禁用"
    disabled
  >
    <Option value="nihao" />
    <Option value="nihao2" />
    <Option value="nihao3" />
  </Select>
)
CDisabledSelect.storyName = 'Disabled'