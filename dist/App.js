import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Button from './components/Button/button';
import Icon from './components/Icon/icon';
import Alert from './components/Alert/alert';
import Tabs from './components/Tabs/tabs';
import TabItem from './components/Tabs/tabItem';
import Input from './components/Input/input';
import AutoComplete from "./components/AutoComplete/autoComplete";
library.add(fas);
function App() {
    var lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
        'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando'];
    var handleFetch = function (query) {
        return lakers.filter(function (name) { return name.includes(query); }).map(function (name) { return ({ value: name }); });
    };
    var handlePromiseFetch = function (query) {
        return fetch("https://api.github.com/users?q=".concat(query))
            .then(function (res) { return res.json(); })
            .then(function (res) {
            console.warn(res);
            return res.slice(0, 10).map(function (item) { return ({
                value: item.login
            }); });
        });
    };
    return (React.createElement("div", { className: "App" },
        React.createElement(AutoComplete, { fetchSuggestions: handleFetch, placeholder: "\u8F93\u5165\u6E56\u4EBA\u961F\u7403\u5458\u82F1\u6587\u540D\u8BD5\u8BD5" }),
        React.createElement(AutoComplete, { fetchSuggestions: handlePromiseFetch, placeholder: "\u8F93\u5165\u6E56\u4EBA\u961F\u7403\u5458\u82F1\u6587\u540D\u8BD5\u8BD5" }),
        React.createElement(Input, { placeholder: "\u6F02\u4EAE\u7684input" }),
        React.createElement(Input, { placeholder: "\u6F02\u4EAE\u7684input", disabled: true }),
        React.createElement(Input, { placeholder: "\u6F02\u4EAE\u7684input", icon: "search" }),
        React.createElement(Input, { placeholder: "\u6F02\u4EAE\u7684input", size: "lg" }),
        React.createElement(Input, { placeholder: "\u6F02\u4EAE\u7684input", size: "sm" }),
        React.createElement(Input, { defaultValue: "www.google.com", prepend: "http://" }),
        React.createElement(Input, { defaultValue: "http://www.google", append: ".com" }),
        React.createElement(Tabs, { defaultIndex: 1 },
            React.createElement(TabItem, { label: "tab1" }, "content1"),
            React.createElement(TabItem, { label: "tab2" }, "content2"),
            React.createElement(TabItem, { label: "disabled", disabled: true }, "content3")),
        React.createElement(Alert, { title: "this is alert" }),
        React.createElement(Icon, { icon: "coffee", theme: "primary", size: "10x" }),
        React.createElement(Menu, { defaultIndex: "0", onSelect: function (index) { return console.log(index); }, defaultOpenSubMenus: ['2'] },
            React.createElement(MenuItem, null, "cool link"),
            React.createElement(MenuItem, { disabled: true }, "cool link 2"),
            React.createElement(SubMenu, { title: "dropdown" },
                React.createElement(MenuItem, null, "dropdown1"),
                React.createElement(MenuItem, null, "dropdown2")),
            React.createElement(MenuItem, null, "cool link 3")),
        React.createElement(Button, { onClick: function (e) { return alert(123); } }, "hello"),
        React.createElement(Button, { disabled: true }, "hello"),
        React.createElement(Button, { btnType: "primary", size: "lg" }, "hello"),
        React.createElement(Button, { btnType: "danger", size: "sm" }, "hello"),
        React.createElement(Button, { btnType: "link", href: "http://www.baidu.com" }, "Baidu Link"),
        React.createElement(Button, { btnType: "link", href: "http://www.baidu.com", disabled: true }, "Baidu Link")));
}
export default App;
