// SSG(Static Site Generation) 지원 타입 참조
import type { InferGetStaticPropsType } from "next";

import Link from "next/link";
import React, { useState, useEffect } from "react";

// api 조회 결과값 형 선언
type APIResult = {
  code: string;
  data: Article[];
  result: string;
};

type Article = {
  article_id?: number;
  board_type_code?: number;
  article_type_code?: number;
  title: string;
  contents: string;
  view_count?: number;
  ip_address?: string;
  is_display_code: number;
  reg_date?: string;
  reg_member_id?: number;
  edit_date?: string | null;
  edit_member_id?: number | null;
};

export default function Index({
  result,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // 테스트용으로 클라이언트에서 화면이 최초 렌더링될 때
  // client data fetching을 이용해 백엔드 API에서 데이터를 불러와 데이터바인딩
  // CSR 방식으로 SSR을 함께 사용하는 예시용
  const [article, setArticle] = useState<Article>({
    title: "",
    contents: "",
    is_display_code: 1,
  });

  // 서버에서 데이터를 포함한 화면이 최초로 웹브라우저 화면에 렌더링될 때(CSR)를 감지해서
  // 단일게시글 정보를 가져와 바인딩
  useEffect(() => {
    const getSingleBlog = async () => {
      const res = await fetch("http://localhost:3005/api/articles/3", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();
      const article: Article = result.data;

      console.log("CSR CLIENT FETCHING===>", result);
      if (result.code === "200") {
        setArticle(article);
      }
    };
    getSingleBlog();
  }, []);

  return (
    <div>
      <h1>List</h1>
      <div>
        대시보드 페이지 제목: {article.title}
        <table className="table-auto">
          <thead>
            <tr>
              <th>글번호</th>
              <th>글제목</th>
              <th>조회수</th>
              <th>작성일시</th>
            </tr>
          </thead>
          <tbody>
            {result.data.map((article, index) => (
              <tr key={index}>
                <td>{article.article_id}</td>
                <td>{article.title}</td>
                <td>{article.view_count}</td>
                <td>{article.reg_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// next.js에서 SSG 용도로 제공해주는 비동기함수
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3005/api/articles");
  const result: APIResult = await res.json();
  console.log("getStaticProps===>", result);
  return { props: { result } };
};
