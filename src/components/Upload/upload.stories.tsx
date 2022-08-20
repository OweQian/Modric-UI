import React  from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Upload } from './upload'
import Button from '../Button/button'
import Icon from '../Icon/icon'

const uploadMeta: ComponentMeta<typeof Upload> = {
  title: 'Upload',
  id: 'Upload',
  component: Upload
}
export default uploadMeta

export const ASimpleUpload: ComponentStory<typeof Upload> = (args) => (
  <Upload
    {...args}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  >
    <Button size="lg" btnType="primary"><Icon icon="upload" /> 点击上传 </Button>
  </Upload>
)
ASimpleUpload.storyName = 'Default'

export const BCheckUpload: ComponentStory<typeof Upload> = (args) => {
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big')
      return false;
    }
    return true;
  }
  return (
    <Upload
      {...args}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={checkFileSize}
    >
      <Button size="lg" btnType="primary"><Icon icon="upload" /> 不能传大于50Kb！ </Button>
    </Upload>
  )
}
BCheckUpload.storyName = 'BeforeUpload'

export const CDragUpload: ComponentStory<typeof Upload> = (args) => (
  <Upload
    {...args}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    name="fileName"
    multiple
    drag
  >
    <Icon icon="upload" size="5x" theme="secondary" />
    <br/>
    <p>点击或者拖动到此区域进行上传</p>
  </Upload>
)
CDragUpload.storyName = 'Drag'