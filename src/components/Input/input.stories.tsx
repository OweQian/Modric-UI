import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './input';
import Button from "../Button/button";

const inputMeta: ComponentMeta<typeof Button> = {
  title: 'Input',
  id: 'Input',
  component: Input
}

export default inputMeta

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />
export const ADefault = Template.bind({})
ADefault.args = {
  placeholder: '漂亮的Input'
}
ADefault.storyName = 'Default'

export const BDisabled = Template.bind({})
BDisabled.args = {
  placeholder: 'disabled input',
  disabled: true
}
BDisabled.storyName = 'Disabled'

export const CIcon = Template.bind({})
CIcon.args = {
  placeholder: 'input with icon',
  icon: 'search'
}
CIcon.storyName = 'Icon'

export const DSizeInput = () => (
  <>
    <Input
      defaultValue="large size"
      size="lg"
    />
    <Input
      placeholder="small size"
      size="sm"
    />
  </>
)
DSizeInput.storyName = 'Size'

export const EPendInput = () => (
  <>
    <Input
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      defaultValue="google"
      append=".com"
    />
  </>
)
EPendInput.storyName = 'Pend'