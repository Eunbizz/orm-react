import React, { Fragment } from 'react'

// 리액트에서는 이미지를 반드시 경로로 참조해서 사용
import logo from './logo.svg'

// 스타일 파일을 직접 만들어서 외부 참조 가능
import './App.css'

function App() {
    // JSX 영역 요소에 대한 기능 로직(프로그래밍기능)을 구현하는 영역
    // 자스크립트로 기능 구현 하는 영역

    const userName = '김은비'
    let userRole = '개발자'

    // 해당 컴포넌트 내에서만 사용하는 공통 스타일 정의 - 임베디드 스타일 적용 방식
    // JSX에 대한 임베디드 스타일은 객체 정의 방식으로 스타일 속성과 값을 정의
    const myStyle = {
        backgroundColor: 'yellow',
        color: 'red',
        fontSize: '20px',
        fonstWeight: 'bold',
        padding: '10px',
        margin: '10px',
    }

    return (
        // 화면 요소를 JSX 문법으로 표현하는 영역
        <Fragment>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* jsx 요소에 직접 인라인 스타일 하려면 {{}} 구조 안에 명시 */}
                    <p style={{ backgroundColor: 'blue', color: 'red' }}>
                        {userName}님은 {userRole} 입니다.
                    </p>
                    {/* JSX 요소는 반드시 홀태그라도 닫는 태그가 필요 */}
                    {userName === '김은비' ? <h4>{userName}님 환영합니다.</h4> : <h4>게스트님 환영합니다.</h4>}
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>

                    {/* 외부 스타일 파일에 정의된 클래스를 적용하는 방식 */}
                    <p className="Sample">클래스 적용 샘플</p>
                </header>
            </div>
            <div style={myStyle}>안녕하세요</div>
        </Fragment>
    )
}

export default App
