import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Select from './index'

const SelectMeta: ComponentMeta<typeof Select> = {
  title: 'Select',
  component: Select,
  id: 'Select',
  subcomponents: { 'Option': Select.Option }
}

export default SelectMeta

export const ADefaultSelect: ComponentStory<typeof Select> = (args) => (
  <Select
    {...args}
    placeholder="请选择"
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
    <Select.Option value="disabled" disabled/>
    <Select.Option value="nihao5" />
  </Select>
)
ADefaultSelect.storyName = 'Default'

export const BMultipleSelect: ComponentStory<typeof Select> = (args) => (
  <Select
    {...args}
    placeholder="支持多选"
    multiple
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
    <Select.Option value="viking" />
    <Select.Option value="viking2" />
  </Select>
)
BMultipleSelect.storyName = 'Multiple'

export const CDisabledSelect: ComponentStory<typeof Select> = (args) => (
  <Select
    {...args}
    placeholder="禁用"
    disabled
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
  </Select>
)
CDisabledSelect.storyName = 'Disabled'