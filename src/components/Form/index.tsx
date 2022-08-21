import React from 'react'
import Form from './form'
import Item, { FormItemProps } from './formItem'

export type IFormComponent = typeof Form & {
  Item: React.FC<FormItemProps>
}

const TransForm = Form as IFormComponent
TransForm.Item = Item

export default TransForm