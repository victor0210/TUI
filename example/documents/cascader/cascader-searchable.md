::: demo
> 使用 `searchable` 开启只选项搜索
```html
<t-cascader :option="option" v-model="opt" searchable/>

<script>
export default {
  data () {
    return {
      opt: ['hp', '1000000', '1000000'],
      option: [
        {
          label: '高价',
          val: 'hp',
          children: [
            {
              label: '1000000',
              val: '1000000',
              children: [
                {
                  label: '1000000',
                  val: '1000000'
                },
                {
                  label: '2000000',
                  val: '2000000'
                },
                {
                  label: '3000000',
                  val: '3000000'
                }
              ]
            },
            {
              label: '2000000',
              val: '2000000'
            },
            {
              label: '3000000',
              val: '3000000'
            }
          ]
        },
        {
          label: '低价',
          val: 'lp',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'a价',
          val: 'ap',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'b价',
          val: 'bp',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'c价',
          val: 'cp',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'd价',
          val: 'dp',
          children: [
            {
              label: '1000000',
              val: '1000000',
              children: [
                {
                  label: '1000000',
                  val: '1000000'
                },
                {
                  label: '2000000',
                  val: '2000000'
                },
                {
                  label: '3000000',
                  val: '3000000'
                },
                {
                  label: '4000000',
                  val: '4000000'
                },
                {
                  label: '5000000',
                  val: '5000000'
                },
                {
                  label: '6000000',
                  val: '6000000'
                },
                {
                  label: '7000000',
                  val: '7000000'
                },
                {
                  label: '8000000',
                  val: '8000000'
                },
                {
                  label: '9000000',
                  val: '9000000'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
```
:::
