import React, { useState } from 'react';
import classNames from 'classnames';
/**
 * 选项卡切换组件。
 * 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ### 引用方法
 *
 * ~~~js
 * import { Tabs } from 'modric-ui'
 * ~~~
 */
export var Tabs = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, onSelect = props.onSelect, type = props.type, children = props.children;
    var _a = useState(defaultIndex), activeIndex = _a[0], setActiveIndex = _a[1];
    var handleClick = function (e, index, disabled) {
        if (!disabled) {
            setActiveIndex(index);
            onSelect && onSelect(index);
        }
    };
    var classes = classNames('tabs', className);
    var navClass = classNames('tabs-nav', {
        'nav-line': type === 'line',
        'nav-card': type === 'card'
    });
    var renderNavLinks = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'TabItem') {
                var _a = childElement.props, label = _a.label, disabled_1 = _a.disabled;
                var classes_1 = classNames('tabs-nav-item', {
                    'is-active': activeIndex === index,
                    'disabled': disabled_1
                });
                return (React.createElement("li", { className: classes_1, key: "nav-item-".concat(index), onClick: function (e) { handleClick(e, index, disabled_1); } }, label));
            }
            else {
                console.error('Warning: Tabs has a child which is not a TabItem component');
            }
        });
    };
    var renderContent = function () {
        return React.Children.map(children, function (child, index) {
            if (index === activeIndex) {
                return child;
            }
        });
    };
    return (React.createElement("div", { className: classes },
        React.createElement("ul", { className: navClass }, renderNavLinks()),
        React.createElement("div", { className: "tabs-content" }, renderContent())));
};
Tabs.defaultProps = {
    defaultIndex: 0,
    type: 'line'
};
export default Tabs;
