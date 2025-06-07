export * from "./getJsonData";
export * from "./login";
export * from "./relationEntity";
export * from "./dataEntity";
export * from "./dtaInstance";
import * as example from "./example";
import * as student from "./student";

export { example, student };
import request from "@/util/request";

function ip(params) {
  return request({
    url: "https://zhoubichuan.com/antdpro-express/api/rule7",
    method: "post",
    params,
  });
}
export const loadApi = () => {
  // 使用API获取IP地址
  // fetch("https://api.ipify.org?format=json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // 使用IP地址获取地理位置
  //     fetch(`https://ipapi.co/${data.ip}/json`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         ip(data);
  //       })
  //       .catch((error) => console.log(error));
  //   })
  //   .catch((error) => console.log(error, "-----------------------"));
};
