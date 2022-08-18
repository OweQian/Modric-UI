import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Input, InputProps } from './input';

const defaultProps: InputProps = {
  placeholder: 'test-input',
  onChange: jest.fn()
}

describe('test Input component', () => {
  it('should render the correct default Input', () => {
    const wrapper = render(<Input {...defaultProps} />)
    const testNode = wrapper.getByPlaceholderText('test-input') as HTMLInputElement
    expect(testNode).toBeInTheDocument()
    expect(testNode).toHaveClass('input-inner')
    fireEvent.change(testNode, {target: {value: '23'}})
    expect(defaultProps.onChange).toHaveBeenCalled()
    expect(testNode.value).toEqual('23')
  })

  it('should render the disabled Input on disabled property', () => {
    const wrapper = render(<Input disabled placeholder="disabled" />)
    const testNode = wrapper.getByPlaceholderText('disabled') as HTMLInputElement
    expect(testNode.disabled).toBeTruthy()
  })

  it('should render different input sizes on size property', () => {
    const wrapper = render(<Input placeholder="sizes" size="lg"/>)
    const testNode = wrapper.container.querySelector('.input-wrapper')
    expect(testNode).toHaveClass('input-size-lg')
  })

  it('should render prepend and append element on prepend/append property', () => {
    const wrapper = render(<Input placeholder="pend" prepend="https://" append=".com"/>)
    const testNode = wrapper.container.querySelector('.input-wrapper')
    expect(testNode).toHaveClass('input-group input-group-append input-group-prepend')
    expect(wrapper.queryByText('https://')).toBeInTheDocument()
    expect(wrapper.queryByText('.com')).toBeInTheDocument()
  })
})