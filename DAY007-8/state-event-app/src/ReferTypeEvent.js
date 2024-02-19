import React, { useState } from 'react'

const ReferTypeEvent = () => {
    // 회원가입 사용자 객체 데이터 구조 정의 및 초기값 할당
    const [user, setUser] = useState({ email: '', password: '', userName: '' })

    // 사용자 정보 입력 UI 요소에서 전달되는 이벤트 수신 및 데이터 바인딩 처리 이벤트 핸들러
    const handleUser = (e) => {
        // 이벤트 발생시점의 user 객체의 복사본을 만들고 복사본의 특정 속성의 값을 이벤트 발색 UI 요소갑승로 변경해서 적용
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSave = () => {
        console.log(user)
        alert('회원가입이 완료되었습니다.')
    }

    const handleInit = () => {
        setUser({ email: '', password: '', userName: '' })
    }

    // 이름입력요소에서 엔터키 발생시 감지해서 저장
    const handleEnterSave = (e) => {
        console.log(e.key)
        console.log(e.keyCode) // 13
        if (e.key === 'Enter') {
            handleSave()
        }
    }

    return (
        <div>
            <h1>회원가입-참조(객체-배열)타입으로 데이터 바인딩</h1>
            {/* 2. 화면 UI 요소 정의
            객체 데이터 바인딩 시 해당 UI요소의 name 속성값을 반드시 데이터바인딩 객체의 속성값과 동일하게 지정
            name=데이터 바인딩 속성값을 지정함으로써 이벤트가 발생한 UI요소가 바인딩될 데이터 속성이 무엇인지 판단
            */}
            메일주소: <input type="text" placeholder="메일주소" name="email" value={user.email} onChange={handleUser} />
            <br />
            <br />
            암호:{' '}
            <input type="password" placeholder="비밀번호" name="password" value={user.password} onChange={handleUser} />
            <br />
            <br />
            이름:{' '}
            <input
                type="text"
                placeholder="이름"
                name="userName"
                value={user.userName}
                onChange={handleUser}
                onKeyDown={handleEnterSave}
            />
            <br />
            <br />
            <hr></hr>
            <button onClick={handleSave}>저장</button>
            <button onClick={handleInit}>초기화</button>
        </div>
    )
}

export default ReferTypeEvent
