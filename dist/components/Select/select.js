var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, createContext, useRef, useEffect } from 'react';
import classNames from 'classnames';
import Input from '../Input/input';
import Icon from '../Icon/icon';
import useClickOutside from '../../hooks/useClickOutside';
import Transition from '../Transition/transition';
export var SelectContext = createContext({ selectedValues: [] });
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
export var Select = function (props) {
    var defaultValue = props.defaultValue, placeholder = props.placeholder, children = props.children, multiple = props.multiple, name = props.name, disabled = props.disabled, onChange = props.onChange, onVisibleChange = props.onVisibleChange;
    var inputRef = useRef(null);
    var containerRef = useRef(null);
    var containerWidth = useRef(0);
    var _a = useState(typeof defaultValue === 'string' ? defaultValue : ''), value = _a[0], setValue = _a[1];
    var _b = useState(Array.isArray(defaultValue) ? defaultValue : []), selectedValues = _b[0], setSelectedValues = _b[1];
    var _c = useState(false), menuOpen = _c[0], setMenuOpen = _c[1];
    var classes = classNames('select', {
        'menu-is-open': menuOpen,
        'is-disabled': disabled,
        'is-multiple': multiple
    });
    useEffect(function () {
        if (inputRef.current) {
            inputRef.current.focus();
            if (multiple && selectedValues.length > 0) {
                inputRef.current.placeholder = '';
            }
            else {
                if (placeholder) {
                    inputRef.current.placeholder = placeholder;
                }
            }
        }
    }, [selectedValues, multiple, placeholder]);
    useEffect(function () {
        if (containerRef.current) {
            containerWidth.current = containerRef.current.getBoundingClientRect().width;
        }
    });
    // 点击文档其它地方 收起下拉框
    useClickOutside(containerRef, function () {
        setMenuOpen(false);
        onVisibleChange && onVisibleChange(false);
    });
    var handleOptionClick = function (value, isSelected) {
        if (!multiple) {
            setValue(value);
            setMenuOpen(false);
            onVisibleChange && onVisibleChange(false);
        }
        else {
            setValue('');
        }
        var updatedValues = [value];
        if (multiple) {
            // 已添加过和未添加过
            updatedValues = isSelected ? selectedValues.filter(function (v) { return v !== value; }) : __spreadArray(__spreadArray([], selectedValues, true), [value], false);
            setSelectedValues(updatedValues);
        }
        onChange && onChange(value, updatedValues);
    };
    var handleClick = function (e) {
        e.preventDefault();
        if (!disabled) {
            setMenuOpen(!menuOpen);
            onVisibleChange && onVisibleChange(!menuOpen);
        }
    };
    var generateOptions = function () {
        return React.Children.map(children, function (child, i) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'Option') {
                return React.cloneElement(childElement, {
                    index: "select-".concat(i)
                });
            }
            else {
                console.error("Warning: Select has a child which is not a Option component");
            }
        });
    };
    var passedContext = {
        onSelect: handleOptionClick,
        multiple: multiple,
        selectedValues: selectedValues
    };
    return (React.createElement("div", { className: classes, ref: containerRef },
        React.createElement("div", { className: "select-input", onClick: handleClick },
            React.createElement(Input, { ref: inputRef, placeholder: placeholder, value: value, disabled: disabled, name: name, icon: "angle-down", readOnly: true })),
        React.createElement(SelectContext.Provider, { value: passedContext },
            React.createElement(Transition, { in: menuOpen, animation: "zoom-in-top", timeout: 300 },
                React.createElement("ul", { className: "select-dropdown" }, generateOptions()))),
        multiple && (React.createElement("div", { className: "selected-tags", style: { maxWidth: containerWidth.current - 32 } }, selectedValues.map(function (value, index) {
            return (React.createElement("span", { className: "tag", key: "tag-".concat(index) },
                value,
                React.createElement(Icon, { icon: "times", onClick: function () { return handleOptionClick(value, true); } })));
        })))));
};
Select.defaultProps = {
    name: 'select',
    placeholder: '请选择'
};
export default Select;
