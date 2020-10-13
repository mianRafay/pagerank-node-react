import axios from "axios";

const ENDPOINT = "http://localhost:9000/";
export class ApiCall {
  static _post = (url, params) => {
    return new Promise((resolve, reject) => {
      axios({
        url: ENDPOINT + url,
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        data: { params },
      })
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };
}
