import request from '@/util/request'
// 获取中国地图数据
export function login ({username}) {
  return request({
    url: 'mock/login.json',
    method: 'get',
  })
}
