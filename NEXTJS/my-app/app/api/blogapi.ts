import useSWR, { mutate } from "swr";

const getFetcher = (url: string) => fetch(url).then((res) => res.json());

const useBlogDetail = (blogId: string) => {
  const { data, error, isLoading } = useSWR<any>(
    `http://localhost:3005/api/articles/${blogId}`,
    getFetcher
  );

  return {
    data: data,
    error: error,
    isLoading: isLoading,
  };
};

export default useBlogDetail;
