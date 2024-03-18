import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

// 전역 상태관리 영역의 메시지 전송 및 수신관련 액션함수 참조
import { setReceiveMessage } from "../redux/actions";

//좌측 메뉴바 컴포넌트 참조
import LeftSidebarMenu from "./LeftSidebarMenu";

// 클라이언트 소켓 모듈 참조
// yarn add socket.io-client
import { socket } from "../socket";

const AuthLayout = (props) => {
  // 최초 한번 AuthLayout 컴포넌트가 호출될 때 소켓 연결을 시도
  // 각종 클라이언트 메시지 수신 이벤트 등록
  // AuthLayout 컴포넌트가 사라질 때 소켓 연결과 이벤트 등록 해제

  useEffect(() => {
    // 클라이언트 소켓과 서버소켓이 연결되면 실행되는 이벤트 정의
    socket.on("connect", onConnect);

    function onConnect() {
      console.log("클라이언트 소켓이 서버소켓과 연결되었습니다.");

      // 서버 소켓과 연결이 완료되면 아래 테스트용 메시지를 서버로 발송
      socket.emit("broadcast", "리액트 앱에서 보내는 메시지");
    }

    socket.on("disconnect", onDisconnect);

    function onDisconnect() {
      console.log("클라이언트 소켓이 서버소켓과 연결이 끊어졌습니다.");
    }

    // 클라이언트 메시지 수신 이벤트 정의 및 핸들러 함수 정의
    socket.on("receiveAll", onReceiveAll);

    // receiveAll 이벤트 수신기 처리 함수
    function onReceiveAll(msg) {
      console.log("서버로부터 메시지를 받았습니다.", msg);
    }

    // 리액트 메시지 전용 메시지 이벤트 정의 및 처리함수
    socket.on("reactReceive", onReactReceive);

    function onReactReceive(msg) {
      console.log("서버 소켓으로부터 수신된 리엑트 데이터", msg);

      // 리덕스 전역공간에 Chat.setReceiveMessage 데이터를 변경
      props.setReceiveMessage(msg);
    }

    // socket.connect() 메소드를 통해 서버 소켓과 클라이언트 소켓 연결
    socket.connect("http://localhost:3005");

    // 클리어함수로 해당 컴포넌트가 사라질 때 소켓 연결과 이벤트 등록 해제
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("receiveAll", onReceiveAll);
      socket.off("reactReceive", onReactReceive);
    };
  }, []);

  // 전역공간에 Chat.sendMessage 전역값이 변경될 때마다 실행되는 이벤트 함수
  useEffect(() => {
    if (props.sendMessage.message !== "") {
      // 전역공간에 Chat.sendMessage 전역값이 변경되면 서버 소켓으로 메시지를 전송
      socket.emit("reactSend", props.sendMessage);
      console.log("메시지 서버로 메시지 전송", props.sendMessage);
    }
  }, [props.sendMessage]);

  return (
    <React.Fragment>
      <div className="layout-wrapper d-lg-flex">
        {/* 최좌측 채팅 좌측 메뉴바 영역  */}
        <LeftSidebarMenu />

        {/* 각종 인증된 페이지 컴포넌트 출력영역-dashboard,start */}
        {props.children}
      </div>
    </React.Fragment>
  );
};

// 채팅 전역데이터 상태값을 props로 매핑
const mapStateToProps = (state) => {
  const { sendMessage, receiveMessage } = state.Chat;
  return { sendMessage, receiveMessage };
};

export default connect(mapStateToProps, { setReceiveMessage })(AuthLayout);
