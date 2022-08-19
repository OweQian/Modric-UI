import React, { useState, createContext, useRef, useEffect } from 'react';
import classNames from 'classnames';
import Input from '../Input/input';
import Icon from '../Icon/icon';
import useClickOutside from '../../hooks/useClickOutside';
import Transition from '../Transition/transition';
import { SelectOptionProps } from './option';

export interface SelectProps {
  /**指定默认选中的条目	 可以是是字符串或者字符串数组*/
  defaultValue?: string | string[];
  /** 选择框默认文字*/
  placeholder?: string;
  /** 是否禁用*/
  disabled?: boolean;
  /** 是否支持多选*/
  multiple?: boolean;
  /** select input 的 name 属性	 */
  name?: string;
  /**选中值发生变化时触发 */
  onChange?: (selectedValue: string, selectedValues: string[]) => void;
  /**下拉框出现/隐藏时触发 */
  onVisibleChange?: (visible: boolean) => void;
  children?: React.ReactNode;
}

export interface ISelectContext {
  onSelect?: (value: string, isSelected?: boolean) => void;
  selectedValues: string[];
  multiple?: boolean;
}

export const SelectContext = createContext<ISelectContext>({ selectedValues: []})

/**
 * 下拉选择器。
 * 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
 * ### 引用方法
 *
 * ~~~js
 * import { Select } from 'vikingship'
 * // 然后可以使用 <Select> 和 <Select.Option>
 * ~~~
 */
export const Select: React.FC<SelectProps> = (props) => {
  const {
    defaultValue,
    placeholder,
    children,
    multiple,
    name,
    disabled,
    onChange,
    onVisibleChange
  } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const containerWidth = useRef(0)

  const [value, setValue] = useState(typeof defaultValue === 'string' ? defaultValue : '')
  const [selectedValues, setSelectedValues] = useState<string[]>(Array.isArray(defaultValue) ? defaultValue : [])
  const [menuOpen, setMenuOpen] = useState(false)

  const classes = classNames('select', {
    'menu-is-open': menuOpen,
    'is-disabled': disabled,
    'is-multiple': multiple
  })

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
      if (multiple && selectedValues.length > 0) {
        inputRef.current.placeholder = ''
      } else {
        if (placeholder) {
          inputRef.current.placeholder = placeholder
        }
      }
    }
  }, [selectedValues, multiple, placeholder])

  useEffect(() => {
    if (containerRef.current) {
      containerWidth.current = containerRef.current.getBoundingClientRect().width
    }
  })

  useClickOutside(containerRef, () => {
    setMenuOpen(false)
    onVisibleChange && onVisibleChange(false)
  })

  const handleOptionClick = (value: string, isSelected?: boolean) => {
    if (!multiple) {
      setValue(value)
      setMenuOpen(false)
      onVisibleChange && onVisibleChange(false)
    } else {
      setValue('')
    }
    let updatedValues = [value]
    if (multiple) {
      updatedValues = isSelected ? selectedValues.filter(v => v !== value) : [...selectedValues, value]
      setSelectedValues(updatedValues)
    }
    onChange && onChange(value, updatedValues)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!disabled) {
      setMenuOpen(!menuOpen)
      onVisibleChange && onVisibleChange(!menuOpen)
    }
  }

  const generateOptions = () => {
    return React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<SelectOptionProps>
      const { displayName } = childElement.type
      if (displayName === 'Option') {
        return React.cloneElement(childElement, {
          index: `select-${i}`
        })
      } else {
        console.error("Warning: Select has a child which is not a Option component")
      }
    })
  }

  const passedContext: ISelectContext = {
    onSelect: handleOptionClick,
    multiple,
    selectedValues
  }

  return (
    <div className={classes} ref={containerRef}>
      <div className="select-input" onClick={handleClick}>
        <Input
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          name={name}
          icon="angle-down"
          readOnly />
      </div>
      <SelectContext.Provider value={passedContext}>
        <Transition
          in={menuOpen}
          animation="zoom-in-top"
          timeout={300}>
          <ul className="select-dropdown">
            {generateOptions()}
          </ul>
        </Transition>
      </SelectContext.Provider>
      {
        multiple && (
          <div className="selected-tags" style={{maxWidth: containerWidth.current - 32}}>
            {
              selectedValues.map((value, index) => {
                return (
                  <span className="tag" key={`tag-${index}`}>
                    {value}
                    <Icon icon="times" onClick={() => handleOptionClick(value, true)}/>
                  </span>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}
Select.defaultProps = {
  name: 'select',
  placeholder: '请选择'
}
export default Select;