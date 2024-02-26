// 코드분할방식을  통해 라우팅하기 위해 Suspense 참조
import React, { Suspense } from "react";

// 라우팅을 위한 Routes, Route 객체 참조
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
// import Main from "./pages/Main";
import Footer from "./components/Footer";
// import Company from "./pages/Company";
// import CompanyLocation from "./pages/CompanyLocation";

// 각종 페이지 컴포넌트를 참조
// 일반적인 컴포넌트 참조방식은 최초 로딩시 성능저하 그리고 컴포넌트 렌더링시 대체효과등을 주기 어렵다
// import Login from "./pages/auth/Login";
// import Entry from "./pages/auth/Entry";
// import ArticleList from "./pages/board/ArticleList";
// import ArticleDetail from "./pages/board/ArticleDetail";
// import ArticleRegist from "./pages/board/ArticleRegist";
// import Product from "./pages/product/Product";
// import Category from "./pages/product/Category";
// import NoneExistPage from "./pages/NoneExistPage";

// react.lazy() 메소드와 Suspense를 이용해 코드 분할방식을 적용
// 최초 로딩 및 라우팅시 성능 개선 처리
// React.lazy(()=>import(컴포넌트경로))
// 2가지 규칙 존재
// 1. Routes 객체를 반드시 Suspense로 감싸주고 대체 UI를 구현
// Suspense는 라우팅하려면 해당 컴포넌트가 완전히 렌더링 되기 전까지 (백엔드 resful 호출시간까지 포함) 대체 요소를 통해 화면에 표시해주는 환경을 제공

const Main = React.lazy(() => import("./pages/Main"));
const Company = React.lazy(() => import("./pages/Company"));
const CompanyLocation = React.lazy(() => import("./pages/CompanyLocation"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Entry = React.lazy(() => import("./pages/auth/Entry"));
const ArticleList = React.lazy(() => import("./pages/board/ArticleList"));
const ArticleDetail = React.lazy(() => import("./pages/board/ArticleDetail"));
const ArticleRegist = React.lazy(() => import("./pages/board/ArticleRegist"));
const Product = React.lazy(() => import("./pages/product/Product"));
const Category = React.lazy(() => import("./pages/product/Category"));
const NoneExistPage = React.lazy(() => import("./pages/NoneExistPage"));

function App() {
  return (
    <div>
      {/* 상단 GNB 공통 레아아웃 메뉴 영역 */}
      <Header></Header>

      {/* 컨텐츠 영역에 라우트를 이용해 라우팅 주소를 정의하고 라우팅 규칙을 정의 */}
      {/* 여러개의 라우팅 규칙을 정의하기 위해 Routes로 Route를 감싼다 */}

      {/* Routes는 사용자가 요청한 주소와 동일한 주소 컴포넌트를 딱 한개만 반환 */}
      <Suspense fallback={<div>로딩중 이미지..</div>}>
        <Routes>
          {/* Route path 속성에 URL 주소 체게 정의, Component에 렌더링할 컴포넌트를 정의 */}
          <Route path="/" Component={Main} />

          {/* 회사소개 라우팅에 중첩 라우팅 구현 */}
          <Route path="/company" Component={Company}>
            <Route path="location" Component={CompanyLocation} />
          </Route>

          <Route path="/login" Component={Login} />
          <Route path="/entry" Component={Entry} />

          <Route path="/article/list" Component={ArticleList} />
          <Route path="/article/detail" Component={ArticleDetail} />
          <Route path="/article/regist" Component={ArticleRegist} />

          <Route path="/product/detail" Component={Product} />
          <Route path="/product/category/:idx" Component={Category} />

          {/* 사용자가 요청한 주소와 일치하는 컴포넌트가 없을 경우 NotExistPage 컴포넌트를 반환 */}
          <Route path="*" Component={NoneExistPage} />
        </Routes>
      </Suspense>

      {/* 하단 풋터 레이아웃 공통 영역 */}
      <Footer></Footer>
    </div>
  );
}

export default App;
