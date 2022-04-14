import axios from "axios";
const commonHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  withCredentials: true
};
let token = localStorage.getItem("token");

const http = {
  handleErrorResponse: (res) => {
    console.log(res);
  },
  handleResponse: (res) => res.data.response,
  get: (url) => {
    // let token = localStorage.getItem("token");
    return axios({
      method: "get",
      url: url,
      baseURL: process.env.REACT_APP_API,
      responseType: "json",
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}`, ...commonHeaders }
    })
      .then((res) => http.handleResponse(res))
      .catch((err) => http.handleErrorResponse(err))
  },
  post: (url, body) =>
    axios({
      method: "post",
      data: body,
      url: url,
      baseURL: process.env.REACT_APP_API,
      responseType: "json",
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}`, ...commonHeaders }
    })
      .then((res) => http.handleResponse(res))
      .catch((err) => http.handleErrorResponse(err)),

  put: (url, body) =>
    axios({
      method: "put",
      data: body,
      url: url,
      baseURL: process.env.REACT_APP_API,
      responseType: "json",
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}`, ...commonHeaders }
    })
      .then((res) => http.handleResponse(res))
      .catch((err) => http.handleErrorResponse(err)),

  HTTPDelete: (url) =>
    axios({
      method: "delete",
      url: url,
      baseURL: process.env.REACT_APP_API,
      responseType: "json",
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}`, ...commonHeaders }
    })
      .then((res) => http.handleResponse(res))
      .catch((err) => http.handleErrorResponse(err)),
};

export default http;
