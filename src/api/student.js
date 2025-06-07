import request from "@/util/request";
// 增
export function add(params) {
  return request({
    url: "/common-node/api/student/addSingle",
    method: "post",
    params
  });
}
// 删
export function delSingle(data) {
  return request({
    url: "/common-node/api/student/deleteSingle",
    method: "delete",
    params: { data },
  });
}
// 改
export function update(params) {
  return request({
    url: "/common-node/api/student/update",
    method: "put",
    params
  });
}
// 查
export function query(params) {
  return request({
    url: "/common-node/api/student/querySingle",
    method: "get",
    params,
  });
}
// 查所有
export function queryAll() {
  return request({
    url: "/common-node/api/student/queryAll",
    method: "get",
  });
}