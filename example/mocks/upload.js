import Mock from 'mockjs'
let Random = Mock.Random

Mock.mock('/upload', 'post',
  [{
    'name|1': Random.name()
  }, {
    'name|2': Random.name()
  }]
)
