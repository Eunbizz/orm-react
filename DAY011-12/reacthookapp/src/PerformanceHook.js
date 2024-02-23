import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";

// 계산로직 함수 구현
const getAverage = (numbers) => {
  console.log("평균값 계산중...");
  if (numbers.length === 0) return 0;

  // array.reduce(): 배열내 모든 값을 합친 결과를 반환하는 배열함수
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const PerformanceHook = () => {
  // 숫자 입력박스의 HTML 요소를 직접 스크립트로 제어하기 위해 useRef 훅을 사용
  const numberTag = useRef(null);

  const [num, setNum] = useState(0);
  const [list, setList] = useState([]);

  // 최초로 해당 컴포넌트가 마운팅(렌더링)될 때 시점에
  // 마우스 포커스를 특정 입력요소에 맞춤
  useEffect(() => {
    numberTag.current.focus();
  }, []);

  // const avg = getAverage(list);

  // useMemo(실행할함수, 데이터변경조건)
  // 메모이제이션 기능을 이용해 list의 값을 별도 저장소에 기록하고 있다가 변경을 감지하면 getAverage 함수를 실행
  // 불필요한 화면 렌더링시마다 불필요하게 getAverage 함수가 실행되는 것을 방지
  // useMemo는 특정 재사용가능함수를 특정조건에서 실행할 수 있게하여 리액트 앱 성능을 담보
  const avg = useMemo(() => getAverage(list), [list]);

  // 입력박스 값 데이터 바인딩
  //   const onNumber = (e) => {
  //     setNum(e.target.value);
  //   };

  // 이벤트 처리함수와 관련된 특정 데이터가 변경이 발생할때만 해당 이벤트 핸들러 함수가 생성되게하면
  // 리액트 성능이 개선되고 useCallback 훅을 사용
  // 최초로 화면 컴포넌트가 로딩이 완료될 때 한번만 해당 함수가 생성
  // useCallback(실행할함수, [실행조건]) // 실행조건이 빈배열이면 최초 컴포넌트가 로드될 때 한번만 실행함수 생성
  const onNumber = useCallback((e) => {
    setNum(e.target.value);
  }, []);

  // 단일숫자 배열 등록 처리 함수
  //   const onAdd = () => {
  //     // array.concat(): 기존 배열에 신규 데이터를 추가해주고 새로운 복사본을 만들어준다(deep copy)
  //     setList(list.concat(parseInt(num)));
  //     setNum(0);
  //   };

  // 불필요하게 모든 이벤트 또는 화면렌더링시 함수가 만들어지는 것을 방지하여 성능 개선
  const onAdd = useCallback(() => {
    setList(list.concat(parseInt(num)));
    setNum(0);

    // 입력요소에 마우스 포커스를 맞추어야 함
    numberTag.current.focus();
  }, [num, list]); // num, list가 변경될 때만 해당 함수가 생성

  const handleKey = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div>
      숫자:{" "}
      <input
        ref={numberTag}
        value={num}
        onChange={onNumber}
        onKeyDown={handleKey}
      ></input>
      <button onClick={onAdd}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:{avg}</b>
      </div>
    </div>
  );
};

export default PerformanceHook;
