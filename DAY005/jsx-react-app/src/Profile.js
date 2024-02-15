import React from 'react'
import Child1 from './ThirdComponent'

// Props 속성의 필수입력여부 또는 데이터 타입 유효성 검사 기능 제공
import PropTypes from 'prop-types'

// const Profile = (props) => {
//     return (
//         <div>
//             <h1>{props.children}</h1>
//             아이디:{props.userId} <br />
//             이름:{props.name} <br />
//             이메일:{props.email} <br />
//             전화번호:{props.tel} <br />
//         </div>
//     )
// }

const Profile = ({ children, userId, name, email, tel, address, age }) => {
    return (
        <div>
            <h1>{children}</h1>
            아이디:{userId} <br />
            이름:{name} <br />
            이메일:{email} <br />
            전화번호:{tel} <br />
            <Child1 name={name} />
            주소:{address} <br />
            나이: {age} <br />
        </div>
    )
}

Profile.defaultProps = {
    address: '서울시 강남구 역삼동',
}

Profile.propTypes = {
    age: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired,
}

export default Profile
