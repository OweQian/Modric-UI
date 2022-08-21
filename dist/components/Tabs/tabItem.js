import React from 'react';
export var TabItem = function (props) {
    var children = props.children;
    return (React.createElement("div", { className: "tab-panel" }, children));
};
TabItem.displayName = 'TabItem';
export default TabItem;
