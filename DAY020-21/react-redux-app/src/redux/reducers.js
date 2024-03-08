// redux/reducers.js = 업무별 폴더에 있는 각종 reducer.js 파일을 통합해주는 역할
// 각종 리듀서 파일에서 노출되는 리듀서 함수를 통합해주는 기능 제공

// redux 패키지의 combineReducers를 통해 리듀서 파일에서 제공하는  리듀서 함수를 통합
import { combineReducers } from "redux";

// 각종 업무별 리듀서 파일에서 제공하는 리듀서함수를 참조
import Todo from "./todo/reducer";

import Auth from "./auth/reducer";

// combineReducers를 이용해 각종 리듀서 함수를 통합
export default combineReducers({ Todo, Auth });
