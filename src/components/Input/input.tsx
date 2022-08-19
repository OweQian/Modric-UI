import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from '../Icon/icon';

type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size'> {
  /**是否禁用 Input */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | React.ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | React.ReactElement;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ~~~js
 * // 这样引用
 * import { Input } from 'modric-ui'
 * ~~~
 *
 * 支持 HTMLInput 的所有基本属性
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props

  const classes = classNames('input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })

  const fixControlledValue = (value: any) => {
    console.log(props, value)
    if (typeof value === 'undefined' || value === null) {
      value = ''
    }
    return value
  }

  // defaultValue 和 value 不能同时设置
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  return (
    <div className={classes} style={style}>
      {
        prepend && <div className="modric-input-group-prepend">{prepend}</div>
      }
      {
        icon && (<div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`}/>
        </div>)
      }
      <input
        type="text"
        ref={ref}
        className="input-inner"
        disabled={disabled}
        {...restProps}/>
      {
        append && <div className="modric-input-group-append">{append}</div>
      }
    </div>
  )
})

export default Input
