// reducer.js 파일 통합

import { combineReducers } from "redux";

import Auth from "./auth/reducer";
import Layout from "./layout/reducer";

export default combineReducers({ Auth, Layout });
