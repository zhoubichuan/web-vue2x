import request from "@/util/request";
// 获取中国地图数据
export function login(params) {
  let target =
  //  localStorage.productUrl
  //   ? 
    {
        url: "https://zhoubichuan.com/antdpro-express/api/login/account",
        method: "post",
        params,
      }
    // : {
    //     url: "mock/login.json",
    //     method: "get",
    //   };
  return request(target);
}
