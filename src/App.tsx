import React from 'react';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Button, {ButtonSize, ButtonType} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Menu defaultIndex="0" onSelect={index => console.log(index)} mode="vertical" defaultOpenSubMenus={['2']}>
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
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">Baidu Link</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Baidu Link</Button>
    </div>
  );
}

export default App;
