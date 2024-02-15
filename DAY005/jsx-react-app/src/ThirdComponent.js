import React from 'react'

const ThirdComponent = (props) => {
    return (
        <div>
            <h1>세번째 뎁스 자식 컴포넌트</h1>
            사용자명: {props.name} <br />
        </div>
    )
}

export default ThirdComponent
