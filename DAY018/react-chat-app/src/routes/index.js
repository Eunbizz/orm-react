// publicRoutes를 통해 비인증 컴포넌들의 레이아웃구성과 라우팅 규칙을 적용한 컴포넌트

import React, { Suspense } from "react";
import { Routes as SwitchRoute, Route, Navigate } from "react-router-dom";

// Suspense는 화면 컴포넌트가 렌더링 작업이 끝날때까지 잠시 중단시키고 다른 컴포넌트 먼저 렌더링하는 기능 제공

import { authProtectedRoutes, publicRoutes } from "./routes";

import NonAuthLayout from "../layouts/NonAuthLayout";
import AuthLayout from "../layouts/AuthLayout";

// // 로그인 여부를 체크한 후 인증되었을 때만 보여줄 주소 호출한 경우 로그인 페이지 반환
// const AuthProtected = (props) => {
//   // 현재 호출하는 페이지가 보호되는 페이지거나 로그인한 사용자 JWT 토큰이 없을 경우
//   if (props.isAuthProtected && localStorage.getItem("authUser")) {
//     return (
//       <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
//     );
//   }
// };

// 메인 라우팅 컴포넌트 구현
const Routes = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        {/* 여러개의 라우터를 Routes로 감싸준다 */}
        <SwitchRoute>
          {/* 비인증 페이지 컴포넌트 라우팅 적용 */}
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              layout={NonAuthLayout}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {/* 인증 페이지 컴포넌트 라우팅 적용 */}
          {/* 페이지컴포넌트를 로그인/인증여부를 체크해 비로그인시 로그인페이지로 이동 */}
          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              layout={AuthLayout}
              element={
                <AuthProtected isAuthProtected={true}>
                  <AuthLayout>{route.component}</AuthLayout>
                </AuthProtected>
              }
              key={idx}
              isAuthProtected={true}
            />
          ))}
        </SwitchRoute>
      </Suspense>
    </React.Fragment>
  );
};

export default Routes;
