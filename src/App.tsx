import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Button from './components/Button/button'
import Icon from './components/Icon/icon'
import Alert from './components/Alert/alert'
import Tabs from './components/Tabs/tabs'
import TabItem from './components/Tabs/tabItem'
import Input from './components/Input/input'
import {AutoComplete} from "./components/AutoComplete/autoComplete";

library.add(fas)

function App() {
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
    'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  }
  const handlePromiseFetch = (query: string) => {
    return fetch(`https://api.github.com/users?q=${query}`)
      .then(res => res.json())
      .then((res) => {
        console.warn(res)
        return res.slice(0, 10).map((item: { login: any; }) => ({
          value: item.login
        }))
      })
  }
  return (
    <div className="App">
      <AutoComplete fetchSuggestions={handleFetch} placeholder="输入湖人队球员英文名试试" />
      <AutoComplete fetchSuggestions={handlePromiseFetch} placeholder="输入湖人队球员英文名试试" />
      <Input placeholder="漂亮的input"/>
      <Input placeholder="漂亮的input" disabled />
      <Input placeholder="漂亮的input" icon="search" />
      <Input placeholder="漂亮的input" size="lg" />
      <Input placeholder="漂亮的input" size="sm" />
      <Input defaultValue="www.google.com" prepend="http://" />
      <Input defaultValue="http://www.google" append=".com" />
      <Tabs defaultIndex={1}>
        <TabItem label="tab1">content1</TabItem>
        <TabItem label="tab2">content2</TabItem>
        <TabItem label="disabled" disabled>content3</TabItem>
      </Tabs>
      <Alert title="this is alert"/>
      <Icon icon="coffee" theme="primary" size="10x"/>
      <Menu defaultIndex="0" onSelect={index => console.log(index)} defaultOpenSubMenus={['2']}>
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem disabled>
          cool link 2
        </MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>
            dropdown1
          </MenuItem>
          <MenuItem>
            dropdown2
          </MenuItem>
        </SubMenu>
        <MenuItem>
          cool link 3
        </MenuItem>
      </Menu>
      <Button onClick={e => alert(123)}>hello</Button>
      <Button disabled>hello</Button>
      <Button btnType="primary" size="lg">hello</Button>
      <Button btnType="danger" size="sm">hello</Button>
      <Button btnType="link" href="http://www.baidu.com">Baidu Link</Button>
      <Button btnType="link" href="http://www.baidu.com" disabled>Baidu Link</Button>
    </div>
  );
}

export default App;
