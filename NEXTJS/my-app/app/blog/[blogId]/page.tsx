export default function BlogDetail(props: any) {
  // props의 값을 출력해봅니다
  console.log("props", props);

  // 동적라우팅 파라미터 값 추출: localhost:3000/blog/1 -> 1
  const blogId = props.params.blogId;

  // QueryString으로 전달되는 키값 추출: localhost:3000/blog/1?category=10 -> 10
  const category = props.searchParams.category;
  const flag = props.searchParams.flag;

  return (
    <>
      단일 블로깅 상세 페이지
      <br />
      블로깅 게시글 고유번호: {blogId} | QueryString으로 전달되는 추가값:{" "}
      {category}-{flag}
    </>
  );
}
