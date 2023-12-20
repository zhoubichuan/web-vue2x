import request from "@/util/request";
// 获取中国地图数据
export function getChinaJson() {
  return request({
    url: "/china.json",
    method: "get",
  });
}
// 存储定位
export function addLocation(params) {
  return request({
    url: "https://zhoubichuan.com/antdpro-express/api/list/data/8",
    method: "post",
    params,
  });
}
