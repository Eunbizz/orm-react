// DeepCopy의 주요 기법은 자바스크립트의 Spread 연산자를 사용하는 것이다.

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// 스프레드 연산자는 ...복사할배열변수 형식으로 복사본을 만든다(별도의 메모리 주소와 공간 할당)
const numbersThree = [...numbersOne, ...numbersTwo];

console.log(numbersThree);

const numbers = [10, 11, 12, 13, 14];
const [one, two, ...rest] = numbers;

console.log(one, two, rest);

// 배열 데이터 복사
const originNumbers = [1, 2, 3, 4, 5];
// const newNumbers = originNumbers; // 원본 데이터를 공유하는 shallow copy
const newNumbers = [...originNumbers]; // 원본 데이터를 복사하는 deep copy

console.log("DeepCopy-Spread 연산자 배열 복사", newNumbers);

// 객체 기반에서의 DeepCopy
const user = {
  id: 1,
  name: "Kim",
  age: 25,
  address: { sido: "Seoul", gugun: "Gangnam" },
};

const user1 = user; // shallow copy
user1.name = "Lee";

const user2 = { ...user }; // deep copy
user2.age = 10;
user2.address.sido = "Busan"; // 1depth만 복사하기 때문에 2depth는 공유된다

console.log("user1", user1);
console.log("user2", user2);

console.log("user === user1", user === user1);
console.log("user === user2", user1 === user2);

// DeepCopy 사용시 기존 속성 값변경 및 신규 속성 추가
const car = {
  brand: "Hyundai",
  model: "Sonata",
  color: "Black",
};

const myCar = { ...car, brand: "Kia", price: 3000 };
console.log("myCar", myCar);

// 두개의 별도 다른 객체도 쉽게 병합이 가능
const company = {
  name: "Google",
  location: "Mountain View",
};

const carInfo = { ...myCar, ...company };
console.log("carInfo", carInfo);

// 2depth 이상의 객체 DeepCopy
const order = {
  orderNo: 1000,
  orderName: "lee",
  amount: 10000,
  products: [
    { pid: 1, product: "item1" },
    { pid: 2, product: "item2" },
  ],
  address: {
    sido: "Seoul",
    gugun: "Gangnam",
  },
};

// 2depth 이상의 객체 DeepCopy
// 2depth 이상의 속성의 값이 배열인 경우는 array.map() 메소드를 통해 배열안에 객체를 복사해서 deepcopy된 배열복사본을 새로 만들어 할당
const newOrder = {
  ...order,
  products: [
    ...order.products.map((p) => {
      // 배열 내의 객체들의 DeepCopy
      // map을 통해서는 배열의 복사본만 만들어지고 배열내의 객체들은 추가로 deepcopy를 해주어야 한다
      return { ...p };
    }),
  ],
  address: { ...order.address },
};

newOrder.products[0].product = "item3";
newOrder.address.sido = "Daejeon";
console.log("order", order);
console.log("newOrder", newOrder);
