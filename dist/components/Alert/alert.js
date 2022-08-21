import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon';
import Transition from "../Transition/transition";
/**
 * 用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ### 引用方法
 *
 * ~~~js
 * import { Alert } from 'modric-ui'
 * ~~~
 */
export var Alert = function (props) {
    var _a;
    var _b = useState(false), hide = _b[0], setHide = _b[1];
    var title = props.title, description = props.description, type = props.type, onClose = props.onClose, closable = props.closable;
    var classes = classNames('alert', (_a = {},
        _a["alert-".concat(type)] = type,
        _a));
    var titleClass = classNames('alert-title', {
        'bold-title': description
    });
    var handleClose = function (e) {
        onClose && onClose();
        setHide(true);
    };
    return (React.createElement(Transition, { in: !hide, timeout: 300, animation: "zoom-in-top" },
        React.createElement("div", { className: classes },
            React.createElement("span", { className: titleClass }, title),
            description && React.createElement("p", { className: "alert-desc" }, description),
            closable && React.createElement("span", { className: "alert-close", onClick: handleClose },
                React.createElement(Icon, { icon: "times" })))));
};
Alert.defaultProps = {
    type: 'default',
    closable: true
};
export default Alert;
