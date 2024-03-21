"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Article } from "@/app/types/definitions";
import useBlogDetail from "@/app/api/blogapi";
import useSWR, { mutate } from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getArticleFetcher = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const result = await response.json();
  console.log("처리결과 데이터:", result);
  return result;
};

export default function BlogDetail(props: any) {
  const articleId = props.params.blogId;
  const router = useRouter();
  const [article, setArticle] = useState<Article>({
    title: "",
    contents: "",
    is_display_code: 1,
  });

  // useEffect(() => {
  //    const fetchData = async () => {
  //       const response = await fetch(`http://localhost:3005/api/articles/${articleId}`, {
  //          method: "GET",
  //          headers: {
  //             //Authorization: `Bearer ${token}`,
  //             "Content-Type": "application/json",
  //          },
  //       });
  //       if (!response.ok) {
  //          throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const result = await response.json();
  //       console.log("처리결과 데이터:", result);
  //       if (result.code == "200") {
  //          setArticle(result.data);
  //       }
  //    };

  //    fetchData().catch((e) => {
  //       // handle the error as needed
  //       console.error("An error occurred while fetching the data: ", e);
  //    });
  // }, []);

  // useSWR을 사용한 데이터 바인딩 처리

  const { data, error, isLoading } = useBlogDetail(articleId);

  useEffect(() => {
    if (data != undefined) {
      setArticle(data.data);
    }
  }, [data]);

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  const onBlogChange = (e: any) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onBlogSubmit = (e: any) => {
    e.preventDefault();

    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3005/api/articles/${articleId}`,
        {
          method: "POST",
          headers: {
            //Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(article),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("처리결과 데이터:", result);
      if (result.code == "200") {
        router.push("/blog/list");
      }
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  };

  //SWR 기반 데이터 리로딩하기 - 캐시 다시 저장
  const onDataReload = () => {
    mutate(`http://localhost:3005/api/articles/${articleId}`);
    console.log("SWR mutate를 통해서 다시 데이터 조회하기", data);
  };

  return (
    <div>
      <form onSubmit={onBlogSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              게시글 수정
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  제목
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="title"
                    value={article.title}
                    onChange={onBlogChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  내용
                </label>
                <div className="mt-2">
                  <textarea
                    name="contents"
                    rows={3}
                    value={article.contents}
                    onChange={onBlogChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => router.push("/blog/list")}
          >
            목록
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            수정
          </button>

          <button onClick={onDataReload}>재로딩하기</button>
        </div>
      </form>
    </div>
  );
}
