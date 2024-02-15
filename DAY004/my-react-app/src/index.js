import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 정적 웹페이지(SPA)인 public/index.html 안에 있는 id가 root인 div 태그 호출
const root = ReactDOM.createRoot(document.getElementById("root"));
// root div 태그 안에 app.js 컴포넌트의 번들링된 결과물을 바인딩해서
// 리액트앱의 메인 화면을 추출
root.render(
  // React.StrictMode는 리액트앱 안에서의 잠재적 문제점을 알아내고 안전하지 않은 것들은 경고해주기 위한 개발시 지원모드
  // 실제 운영 환경에서는 해당 코드가 작동하지 않음(무시됨)
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
