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

library.add(fas)

function App() {
  return (
    <div className="App">
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
