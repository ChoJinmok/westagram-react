// from경로 뒤에 그냥 문자열이 있다면 node_modules에서 가져오고 있는 것
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 경로가 적혀있음 현재폴더에서 APP을 가져옴(자바스크립트 끼리 import export할때는 .js 생략해도됨)
import App from './App';
import Login from './Login'

// ReateDOM객체에서 render메소드를 호출
ReactDOM.render(
  // 첫번쨰 인자로 HTML태그와 비슷하게 생김, 리액트의 컨퍼넌트가 온다
    <App />,
  // 두번째 인자 자식위치로 첫번쨰 인자가 렌더링된다.
  document.getElementById('root')
);
ReactDOM.render(<Login />, document.getElementById('root'));

