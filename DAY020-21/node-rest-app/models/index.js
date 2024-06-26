const path = require("path");
const Sequelize = require("sequelize");

//개발 모드 환경 설정
const env = process.env.NODE_ENV || "development";

//DB 연결 환경 설정 정보 변경 처리//관련 정보 수정
const config = require(path.join(__dirname, "..", "config", "config.json"))[
  env
];

//데이터 베이스 객체
const db = {};

//DB 연결 정보로 Sequelize ORM 객체 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//DB 처리 객체에 Sequelize 정보 매핑 처리
//이후 DB 객체를 통해 데이터 관리 가능해짐
db.sequelize = sequelize; //DB 연결 정보를 포함한 DB제어 객체속성(CRUD)
db.Sequelize = Sequelize; //Sequelize 패키지에서 제공하는 각종 데이터 타입 및 관련 객체 정보 제공

//게시글 모델 모듈파일 참조하고 DB 속성 정의하기
db.Article = require("./article.js")(sequelize, Sequelize);

//회원 모델 모듈파일 참조하고 DB 속성 정의하기
db.Member = require("./member.js")(sequelize, Sequelize);

// 채널(채팅방) 정보
db.Channel = require("./channel.js")(sequelize, Sequelize);

// 채널별 참여 사용자 정보
db.ChannelMember = require("./channelMember.js")(sequelize, Sequelize);

// 채널별 메시지 로깅 정보
db.Message = require("./channelMsg.js")(sequelize, Sequelize);

//db객체 외부로 노출하기
module.exports = db;
