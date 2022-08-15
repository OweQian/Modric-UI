import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'

function App() {
  return (
    <div className="App">
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
