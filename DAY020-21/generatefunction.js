// 제너레이터 함수 정의
// function * (){yield;(첫번째 중단) yield;(두번째 중단)}
// 함수 내의 로직을 순차적으로 진행시키고
// 진행되는 순서에 따른 반환값을 다양하게 변환하고자 할 때 사용
const gen = function* () {
  console.log(1);
  yield;

  console.log(2);
  yield;
};

// 제너레이터 함수를 실행시킨다
const display = gen();

// 제너레이터 함수에서 제공되는 next()는 yield를 기준으로 로직을 순차적으로 실행
display.next(); // 1 출력
display.next(); // 2 출력
display.next(); // 3 출력

// 무한 반복 제너레이터 함수
let i = 0;
const gen2 = function* () {
  while (true) {
    // yield 전에 로직처리 후 반환값은 yield에 표시
    // yield 반환값 지정
    yield i++;
  }
};

const display2 = gen2();
display2.next();
console.log("현재 전역변수값:", i);
display2.next();
console.log("현재 전역변수값:", i);
display2.next();
console.log("현재 전역변수값:", i);
