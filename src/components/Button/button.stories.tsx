import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button from './button';

const buttonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  id: 'Button',
  component: Button
}

export default buttonMeta

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const ADefault = Template.bind({})
ADefault.args = {
  children: 'Default Button'
}
ADefault.storyName = 'Default'
// export const Large = Template.bind({})
// Large.args = {
//   size: 'lg',
//   children: 'Large Button',
// }
// export const Small = Template.bind({})
// Small.args = {
//   size: 'sm',
//   children: 'Small Button',
// }
// export const Primary = Template.bind({})
// Primary.args = {
//   btnType: 'primary',
//   children: 'Primary Button',
// }
// export const Danger = Template.bind({})
// Danger.args = {
//   btnType: 'danger',
//   children: 'Danger Button',
// }
// export const Link = Template.bind({})
// Link.args = {
//   btnType: 'link',
//   children: 'Link Button',
//   href: 'https://google.com'
// }

export const BButtonWithSize = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">small button</Button>
  </>
)
BButtonWithSize.storyName = 'Size'

export const CButtonWithSize = () => (
  <>
    <Button btnType="primary">primary button</Button>
    <Button btnType="danger">danger button</Button>
    <Button btnType="link" href="http://google.com">link button</Button>
  </>
)
CButtonWithSize.storyName = 'Type'