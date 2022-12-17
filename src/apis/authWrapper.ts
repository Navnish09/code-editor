
export const authWrapper = (url: RequestInfo | URL, options: Record<string,any>) => {
  const token = localStorage.getItem("token");

  if(!token){
    return Promise.reject({
      message: "No token found",
      errorCode : "NO_TOKEN_FOUND",
      statusCode : 401
    });
  }

  const internalOptions = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  };


  return new Promise((resolve, reject) => {
    fetch(url, internalOptions)
      .then(async (res) => {
        const data: Record<string, any> = await res.json();

        if (!res.ok) {
          return Promise.reject(data);
        }

        resolve(data);
      })
      .catch(reject);
  });
}