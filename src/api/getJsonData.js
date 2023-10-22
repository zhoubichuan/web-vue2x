import request from "@/util/request";
// 获取中国地图数据
export function getChinaJson() {
  return request({
    url: "/china.json",
    method: "get",
  });
}
// 存储定位
export function getLocation(params) {
  return request({
    url: "https://zhoubichuan.com/antdpro-express/api/list/data/8",
    method: "post",
    params: {
      filterField: "map2",
      name: "1",
      time: new Date().toLocaleDateString() + "",
      city: params.address,
      latitude: params.latitude,
      longitude: params.longitude,
      descript: "1",
      detail: "1",
    },
  });
}
