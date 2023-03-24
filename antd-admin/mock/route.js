import { Constant } from './_utils'
const { ApiPrefix } = Constant

const database = [
  {
    id: '1',
    icon: 'dashboard',
    name: '系统首页',
    route: '/dashboard',
  },
  {
    id: '2',
    name: '设备管理',
    icon: 'bar-chart',
    route: '/post',
  },
  {
    id: '3',
    name: '测试设计',
    route: '/request',
    icon: 'shopping-cart',
  },
  {
    id: '4',
    name: '测试审签',
    icon: 'camera-o',
    route: '/user',
  },
  {
    id: '6',
    name: '测试执行',
    icon: 'aaa',
    route: '/add',
  },
  {
    id: '7',
    name: '用户管理',
    icon: 'user',
    route: '/editor',
  },
]

module.exports = {
  [`GET ${ApiPrefix}/routes`](req, res) {
    res.status(200).json(database)
  },
}
