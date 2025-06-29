import request from "@/util/request";
// 查询
export function query(task) {
  debugger
  return request({
    url: "/api/localhost",
    method: "get",
    params: { task }
  });
}