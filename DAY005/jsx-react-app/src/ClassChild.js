import React, { Component } from 'react'

// 클래스형 컴포넌트는 기본적으로 react 패키지의 Component 클래스를 상속받아야 한다.
// javascript에서 클래스를 상속받을 때는 extends 예약어를 사용해 새로운 클래스 정의
class ClassChild extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
                부서명: {this.props.deptName} <br />
                부서역할: {this.props.deptRole} <br />
                부서원수: {this.props.employee} <br />
                샘플데이터: {this.props.sampleData}
            </div>
        )
    }
}

export default ClassChild
