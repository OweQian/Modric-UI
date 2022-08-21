import React from 'react';
import Select from './select'
import Option, { SelectOptionProps} from './option'

export type ISelectComponent = typeof Select & {
  Option: React.FC<SelectOptionProps>
}

const TransSelect = Select as ISelectComponent
TransSelect.Option = Option

export default TransSelect;