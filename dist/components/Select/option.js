import React, { useContext } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon';
import { SelectContext } from './select';
export var Option = function (props) {
    var value = props.value, index = props.index, label = props.label, disabled = props.disabled, children = props.children;
    var _a = useContext(SelectContext), onSelect = _a.onSelect, selectedValues = _a.selectedValues, multiple = _a.multiple;
    var isSelected = selectedValues.includes(value);
    var classes = classNames('select-item', {
        'is-disabled': disabled,
        'is-selected': isSelected
    });
    var handleClick = function (e, value, isSelected) {
        e.preventDefault();
        onSelect && !disabled && onSelect(value, isSelected);
    };
    return (React.createElement("li", { key: index, className: classes, onClick: function (e) { return handleClick(e, value, isSelected); } },
        children || (label ? label : value),
        multiple && isSelected && React.createElement(Icon, { icon: "check" })));
};
Option.displayName = 'Option';
export default Option;
