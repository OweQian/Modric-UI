import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Alert from './alert';

const AlertMeta: ComponentMeta<typeof Alert> = {
  title: 'Alert',
  id: 'Alert',
  component: Alert
}

export default AlertMeta;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args} />
)

export const ADefaultAlert = Template.bind({})
ADefaultAlert.args = {
  title: 'this is alert!'
}
ADefaultAlert.storyName = 'Default'

export const CDescAlert = Template.bind({})
CDescAlert.args = {
  title: '提示',
  description: 'this is a long description'
}
CDescAlert.storyName = 'Description'

export const BStylesAlert = () => {
  return (
    <>
      <Alert title="this is Success" type="success" />
      <Alert title="this is Danger!" type="danger" />
      <Alert title="this is Warning!" type="warning" closable={false} />
    </>
  )
}
BStylesAlert.storyName = 'Type'