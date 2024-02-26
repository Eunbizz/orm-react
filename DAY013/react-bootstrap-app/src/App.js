import React from "react";

// bootstrap css 파일 직접 참조
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Sass 파일 참조
import "../node_modules/bootstrap/scss/bootstrap.scss";

// 라우팅을 위한 react-router-dom 패키지의 BrowserRouter, Routes, Route 참조
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GNB from "./components/GNB";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      {/* 상단 GNB 공통 레이아웃 메뉴 영역 */}
      <GNB />
      <div className="App">
        {/* 최상위 컴포넌트에 전체 어플리케이션 레이아웃 구성 */}
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" Component={Main} />
              <Route path="/signin" Component={Login} />
              <Route path="/signup" Component={Register} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
