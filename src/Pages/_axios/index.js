import axios from "axios";

const baseURL = `http://175.178.70.163:8030`;
let token = null;

async function apiAxios(method, url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method,
      baseURL,
      url,
      params: method === "GET" ? params : null,
      data: method === "POST" ? params : null,
      headers: {
        "X-Access-Token": token,
      },
    })
      .then(({ data }) => {
        if (data.code === 200 || data.code === 0) {
          resolve(data);
        } else {
          resolve({});
        }
      })
      .catch(async (e) => {
        if (e.response.status === 401) {
          const data = await apiAxios("POST", "/back-server/login", {
            username: "apiuser",
            password: "ApiUser168.",
          });
          token = data.token;
          const apiData = await apiAxios(method, url, params);
          resolve(apiData);
        } else {
          reject(e);
        }
      });
  });
}

export default {
  get: function (url, params) {
    return apiAxios("GET", url, params, true);
  },
  post: function (url, params) {
    return apiAxios("POST", url, params, true);
  },
  token: function () {
    return token;
  },
};
