import './App.css'

import React, { useState } from 'react'

// 자식 컴포넌트 참조
import FChild from './FunctionChild'
import CChild from './ClassChild'
import MyProfile from './Profile'
import CounterFunctionComponent from './CounterFunctionComponent'
import CounterClassComponent from './CounterClassComponent'

// 함수형 컴포넌트
// 리액트 UI 컴포넌트는 반환값으로 JSX UI 요소 정보를 반환하여 최종 웹브라우저에 UI 표현
// JSX UI 요소를 제어하기 위해 함수 내에 기능구현 영역에서 필요한 데이터와 이벤트를 처리
function App() {
    // 기능 구현 코드
    // 이벤트 기능 구현
    // 해당 컴포넌트의 State(로컬데이터) 값과 JSX 영역 내 UI 요소간 데이터 바인딩을 통해
    // 데이터 바인딩 기법(MVM)으로 UI 요소와 데이터를 관리

    // 샘플용 로컬 문자열 테스트 데이터(스테이트) 정의 및 초기값 할당
    const [sample, setSample] = useState('샘플데이터')

    // 사용자 정보 JSON 데이터 상태값 정의 및 할당
    const [user, setUser] = useState({ userId: 'eunbi', name: '김은비', email: 'email', tel: '01076407278' })

    // JSX 코드
    return (
        <div>
            <h1>NextPlay 방문을 환영합니다.{sample}</h1>

            {/* 각종 UI 컴포넌트의 반환결과값이 결국 JSX 요소들이기 때문에 참조한 UI는 결국 부모컴포넌트에 JSX 영역에서 사용됨 */}
            <FChild companyName="NextPlay" telephone="02-123-123" address="서울시 태헤란로" sampleData={sample}>
                우리회사소개
            </FChild>
            <CChild deptName="개발1팀" deptRole="협업툴솔루션개발" employee={10} sampleData={sample}>
                개발팀 소개
            </CChild>
            <MyProfile userId="eunbi" name="김은비" email="email" tel="01076407278" age={30}>
                내 소개
            </MyProfile>
            <MyProfile userId={user.userId} name={user.name} email={user.email} tel={user.tel} age={30}>
                내 소개
            </MyProfile>
            <CounterFunctionComponent></CounterFunctionComponent>
            <CounterClassComponent></CounterClassComponent>
        </div>
    )
}

export default App
