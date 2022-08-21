import React, { useRef } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Form, { FormRef } from './form'
import Item from './formItem'
import Input from '../Input'
import Button from '../Button'
import Select from '../Select'
import { CustomRule } from './useStore'

const FormMeta: ComponentMeta<typeof Form> ={
  title: 'Form',
  id: 'Form',
  component: Form,
  subcomponents: { 'Item': Item }
}
export default FormMeta

const confirmRules: CustomRule[] = [
  { type: 'string',required: true, min: 3, max: 8 },
  ({ getFieldValue }) => ({
    asyncValidator(rule, value) {
      console.log('the value', getFieldValue('password'))
      console.log(value)
      return new Promise((resolve, reject) => {
        if (value !== getFieldValue('password')) {
          reject('The two passwords that you entered do not match!')
        }
        setTimeout(() => {
          resolve()
        }, 1000)
      })

    }
  })
]
export const ABasicForm: ComponentStory<typeof Form> = (args) => {
  return (
    <Form {...args} >
      <Item label='用户名' name='name' rules={[{type: 'string',required: true, min: 3}]}>
        <Input/>
      </Item>
      <Item label='密码' name='password' rules={[{type: 'string',required: true, min: 3, max: 8 }]}>
        <Input type="password"/>
      </Item>
      <div className='form-submit-area'>
        <Button type="submit" btnType='primary'>登陆</Button>
      </div>
    </Form>
  )
}
ABasicForm.storyName = 'Default'

export const BRegForm: ComponentStory<typeof Form> = (args) => {
  const initialValues = {
    agreement: false
  }
  return (
    <Form {...args} initialValues={initialValues}>
      <Item label='邮件' name='email' rules={[{ type: 'email',required: true }]}>
        <Input/>
      </Item>
      <Item label='密码' name='password' rules={[{type: 'string',required: true, min: 3, max: 8 }]}>
        <Input type="password"/>
      </Item>
      <Item
        label='性别'
        name='gender'
        rules={[{type: 'string',required: true }]}
        getValueFromEvent={(e) => e }
        valuePropName='defaultValue'
      >
        <Select
          placeholder="请选择性别"
        >
          <Select.Option value="男" />
          <Select.Option value="女" />
        </Select>
      </Item>
      <div className='agreement-section' style={{ 'display': 'flex', 'justifyContent': 'center'}}>
        <Item
          name='agreement'
          rules={[{ type: 'enum', enum: [true], message: '请同意协议'}]}
          getValueFromEvent={(e) => e.target.checked }
          valuePropName='checked'
        >
          <input type="checkbox"/>
        </Item>
        <span className="agree-text">注册即代表你同意<a href='#'>用户协议</a></span>
      </div>
      <div className='form-submit-area'>
        <Button type="submit" btnType='primary'>登陆</Button>
      </div>
    </Form>
  )
}
BRegForm.storyName = 'Basic'

export const CFullForm: ComponentStory<typeof Form> = (args) => {
  const ref = useRef<FormRef>()
  const resetAll = () => {
    console.log('form ref', ref.current)
    console.log('get value', ref.current?.getFieldValue('username'))
    ref.current?.resetFields()
  }
  return (
    // @ts-ignore
    <Form initialValues={{ username: 'viking', agreement: false }} {...args} ref={ref}>
      { ({ isValid, isSubmitting }) => (
      <>
      <Item label='用户名' name='username' rules={[{ type: 'email', required: true }]}>
        <Input/>
      </Item>
      <Item label='密码' name='password' rules={[{type: 'string', required: true, min: 3, max: 8 }]}>
        <Input type='password'/>
      </Item>
      <Item label='重复密码' name='confirmPwd' rules={confirmRules}>
        <Input type='password'/>
      </Item>
      <div className='agreement-section' style={{ 'display': 'flex', 'justifyContent': 'center'}}>
        <Item
          name='agreement'
          valuePropName='checked'
          getValueFromEvent={(e) => e.target.checked}
          rules={[{ type: 'enum', enum: [true], message: '请同意协议'}]}
        >
          <input type="checkbox"/>
        </Item>
        <span className="agree-text">注册即代表你同意<a href='#'>用户协议</a></span>
      </div>
      <div className='form-submit-area'>
        <Button type="submit" btnType='primary'>登陆 {isSubmitting ? '验证中' : '验证完毕'} {isValid ? '通过😄' : '没通过😢'} </Button>
        <Button type="button" onClick={resetAll}>重置</Button>
      </div>
      </>
    )}
    </Form>
  )
}

CFullForm.storyName = 'Custom'