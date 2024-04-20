interface CustomFetchOptions {
  apiUrl: string;
  method: "GET" | "POST";
  body?: any; // POST 요청 시 요청 본문에 들어갈 데이터
}

export const Fetcher = async ({ apiUrl, method, body }: CustomFetchOptions) => {
  const requestOptions: RequestInit = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  if (method === "POST" && body) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(apiUrl, requestOptions);

    if (res.ok) {
      return await res.json();
    } else {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }
  } catch (error) {
    console.error(error);
  }
};
