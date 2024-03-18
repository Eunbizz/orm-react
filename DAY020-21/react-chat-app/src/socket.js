import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3005";

console.log("클라이언트 socket.js가 호출되었습니다.");

export const socket = io(URL, {
  autoConnect: false,
});
