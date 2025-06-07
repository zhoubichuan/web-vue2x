import request from "@/util/request";
// 增
export function query(params) {
  return request({
    url: "/api/example/query",
    method: "get",
    params
  });
}