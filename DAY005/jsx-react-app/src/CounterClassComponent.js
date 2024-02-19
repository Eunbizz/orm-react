import React, { Component } from 'react'

class CounterClassComponent extends Component {
    // 클래스생성자함수: 클래스가 객체로 생성될 때 최초 한 번 실행되는 특별한 함수
    // 생성자함수를 통해 객체를 초기화해주는 기능을 제공
    // 리액트에서의 클래스 컴포넌트의 생성자 함수에는 props를 반드시 전달해야 하고
    // 전달된 props는 생성되는 객체의 디폴트 props 값으로 전달된다
    constructor(props) {
        // 객체에 props 전달해주는 역할
        super(props)

        // 함수형 컴포넌트와 다르게 state를 객체를 통해 모든 데이터 속성을 정의
        // state의 구조와 초기화를 반드시 this.state={} 객체를 통해 정의
        this.state = {
            count: 200,
            userName: '홍길동',
            goods: [],
        }
    }

    // 증가 버튼 클릭 시 호출되는 이벤트 처리 핸들러 함수
    handleIncrease = () => {
        // 상태값 변경은 반드시 this.setState() 함수를 통해 변경
        this.setState({ count: this.state.count + 1 })
    }

    handleDecrease = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <h1>카운터 상태값 표시: {this.state.count}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        )
    }
}

export default CounterClassComponent
