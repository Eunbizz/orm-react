import logo from './logo.svg'
import './App.css'

function App() {
    // 해당 컴포넌트의 로직 구현 영역
    console.log('App.js 화면이 렌더링 됩니다')

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello React!</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
