// 원시타입 변수 선언과 할당의 의미를 알아보자

let score;
score = 80;
score = 90;

console.log(score);

let copy = score;

console.log("copy-score1", copy, score);

copy = 100;

// 복사한 원시타입의 값을 변경해도 원본의 값은 변경되지 않는다 - 실제 저장되는 메모리 공간이 다르다는 뜻
console.log("copy-score2", copy, score);

// === 값을 비교하는 타입까지 같이 비교하고 동일한 메모리 주소를 바라보는지 확인
console.log(copy === score);

// 참조타입의 불변성
// 참조타입은 불변성을 지원하지 않는다 = 동일한 메모리공간을 참조/재사용

var object1 = {
  id: 1,
  name: "Kim",
  age: 25,
  address: { sido: "Seoul", gugun: "Gangnam" },
};

console.log(object1);

// 참조타입 값 변경
object1.name = "Lee";

console.log(object1);

// 참조타입을 복사
// 복사한 원본의 주소를 참조하고 같은 공간의 데이터를 공유하게되며
// 공유된 공간의 값을 복사하는데 이를 얕은카피(shallow copy)라고 한다
var object2 = object1;

object2.name = "Park";

console.log(object1);
console.log(object1 === object2);
