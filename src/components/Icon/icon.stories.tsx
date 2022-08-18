import React from 'react';
import {ComponentMeta} from '@storybook/react';
import Icon from './icon'
import Button from '../Button/button'

const iconMeta: ComponentMeta<typeof Icon> = {
  title: 'Icon',
  id: 'Icon',
  component: Icon
}

export default iconMeta

export const ADefaultIcons = () => (
  <>
    <Icon icon="check" size="3x"/>
    <Icon icon="times" size="3x"/>
    <Icon icon="anchor" size="3x"/>
    <Icon icon="trash" size="3x"/>
    <Button size="lg" btnType="primary"><Icon icon="check"/> check </Button>
  </>
)
ADefaultIcons.storyName = 'Default'

export const BThemeIcons = () => (
  <>
    <Icon icon="check" size="3x" theme="success"/>
    <Icon icon="times" size="3x" theme="danger"/>
    <Icon icon="anchor" size="3x" theme="primary"/>
    <Icon icon="exclamation-circle" size="3x" theme="warning"/>
  </>
)
BThemeIcons.storyName = 'Theme'

export const CCustomIcons = () => (
  <>
    <Icon icon="spinner" size="3x" theme="primary" spin/>
    <Icon icon="spinner" size="3x" theme="success" pulse/>
  </>
)
CCustomIcons.storyName = 'More'
