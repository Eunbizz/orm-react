// fetch post 방식 (SWR X)

const postFetcher = async (data: any) => {
  const res = await fetch("http://localhost:3005/api/member/entry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

const loginFetcher = async (data: any) => {
  const res = await fetch("http://localhost:3005/api/member/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

export default { postFetcher, loginFetcher };
