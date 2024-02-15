import React from 'react'

const FunctionChild = (props) => {
    return (
        <div>
            <h1>{props.children}</h1>
            회사명: {props.companyName} <br />
            전화번호: {props.telephone} <br />
            주소: {props.address} <br />
            샘플데이터: {props.sampleData}
        </div>
    )
}

export default FunctionChild
