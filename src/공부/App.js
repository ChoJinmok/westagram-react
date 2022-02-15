import logo from './logo.svg';
//css파일도 import해줘야됨
import './App.css';

// 함수형 컨퍼넌트, 컨퍼넌트의 첫 글짜는 대문자!(리액트가 일반적인 태그인지 컨퍼넌트인지 구분하는 방법), 파일명도 대문자로 시작
function App() {
  // 컨포넌트 리턴문에 작성된 JSX가 보여질 요소
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 여러개의 자바스크립트 파일에서 서로 주고 받기 위해 import와 export 활용(둘중에 하나만 하면 에러)
// css 파일도 같이 export된다.
export default App;
