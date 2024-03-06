// 인증 및  비인증 라우팅 규칙들을 2개의 배열로 나눠 구성하고 주소체계 정의하는 모듈
import React from "react";
import { Navigate } from "react-router-dom";

// 사용자 인증이 필요한 화면컴포넌트
const StarterPage = React.lazy(() => import("../pages/Starter/index"));
const Dashboard = React.lazy(() => import("../pages/Dashboard/index"));

// 사용자 인증이 필요없는 화면컴포넌트
const Login = React.lazy(() => import("../pages/Auth/Login"));
const Register = React.lazy(() => import("../pages/Auth/Register"));

// 인증이 필요한 라우팅 목록 및 라우팅 규칙 정의
const authProtectedRoutes = [
  { path: "/starter", component: <StarterPage /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
