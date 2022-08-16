import React from 'react';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import Button, {ButtonSize, ButtonType} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} onSelect={index => alert(index)} mode="vertical">
        <MenuItem index={0}>
          cool link
        </MenuItem>
        <MenuItem index={1} disabled>
          cool link 2
        </MenuItem>
        <MenuItem index={2}>
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
