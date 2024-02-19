import React, { useState } from 'react'

const CounterFunctionComponent = () => {
    // 자동증감되는 숫자 저장용 스테이트값 정의 및 초기값 할당
    const [count, setCount] = useState(100)

    // 사용자 이름 저장용 스테이트값 정의 및 초기값 할당
    const [userName, setUserName] = useState('홍길동')

    // 상품정보 배열 데이터 정의 및 초기값 할당
    const [goods, setGoods] = useState([
        { id: 1, productName: '제품명', price: 1000 },
        { id: 2, productName: '제품명', price: 2000 },
    ])

    // 로그인 여부 데이터 저장 불린형 값 정의 및 초기값 할당
    const [isLoggined, setIsLoggiuned] = useState(true)

    // 단일 사용자 데이터 구조 정의 및 초기값 할당
    const [user, setUser] = useState({ userId: 'user01', userName: '홍길동' })

    // 증가 버튼 클릭 시 호출되는 이벤트 처리 핸들러 함수
    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        // 반드시 count 값을 변경하려면 해당 세터 함수인 setCount()를 통해서 변경해야한다
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <div>
            <h1>카운터 상태값 표시: {count}</h1>
            <button onClick={handleIncrease}>+1</button>
            <button onClick={handleDecrease}>-1</button>
        </div>
    )
}

export default CounterFunctionComponent
