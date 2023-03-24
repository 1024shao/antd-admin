import { Mock, Constant } from './_utils'
import { numArr, expressArr, equipStateList, equipTypeList } from './const'

const { ApiPrefix } = Constant
let postId = 0
const database = Mock.mock({
  'data|100': [
    {
      id() {
        postId += 1
        return postId + 10000
      },
      'status|1-2': 1,
      title: '@title',
      author: '@last',
      'categories|1': equipTypeList,
      'tags|1': numArr,
      'views|10-200': 1,
      'comments|1': equipStateList,
      "visibility|1": expressArr,
      date: "@date('yyyy-MM-dd')",
      image() {
        return Mock.Random.image(
          '100x100',
          Mock.Random.color(),
          '#757575',
          'png',
          this.author.substr(0, 1)
        )
      },
    },
  ],
}).data

module.exports = {
  [`GET ${ApiPrefix}/posts`](req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = database
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter(item => {
          if ({}.hasOwnProperty.call(item, key)) {
            return (
              String(item[key])
                .trim()
                .indexOf(decodeURI(other[key]).trim()) > -1
            )
          }
          return true
        })
      }
    }

    res.status(200).json({
      data: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
    })
  },
}
