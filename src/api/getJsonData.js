import request from '@/util/request'
// 获取中国地图数据
export function getChinaJson () {
  return request({
    url: '/china.json',
    method: 'get',
  })
}
