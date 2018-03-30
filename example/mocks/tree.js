import Mock from 'mockjs'
let Random = Mock.Random

Mock.mock('/tree/list', 'get',
  [{
    'name|1': Random.name()
  }]
)
