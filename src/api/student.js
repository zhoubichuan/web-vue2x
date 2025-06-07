import request from "@/util/request";
// 增
export function add(data) {
  return request({
    url: "/api/student/addSingle",
    method: "post",
    data
  });
}
// 删
export function delSingle(data) {
  return request({
    url: "/api/student/deleteSingle",
    method: "delete",
    params: { data },
  });
}
// 改
export function update(data) {
  return request({
    url: "/api/student/update",
    method: "put",
    data
  });
}
// 查
export function query(params) {
  return request({
    url: "/api/student/querySingle",
    method: "get",
    params,
  });
}
// 查所有
export function queryAll() {
  return request({
    url: "/api/student/queryAll",
    method: "get",
  });
}