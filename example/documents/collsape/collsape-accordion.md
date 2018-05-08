:::demo
> 添加 `accordion` 属性开启手风琴模式
```html
<t-collsape v-model="val" accordion>
  <t-collsape-item :name="1">
    1、写作主体
    <template slot="content">
      <p>写作主体，即进入写作状态的人，一般谓之作者。</p>
      <p>就写作四要素而言，写作主体在写作活动中无疑是居于主导地位的要素，动人的诗句、感人的文章都要在其手中诞生。</p>
    </template>
  </t-collsape-item>
  <t-collsape-item :name="2">
    2、写作客体
    <template slot="content">
      <p>写作客体实际上就是指作家所要描绘的现实世界（物质世界和精神世界。</p>
      <p>泛指一切能够成为写作对象的人、事、景等客观对象。写作客体往往制约、引导着写作主体的主观能动性的发挥。</p>
    </template>
  </t-collsape-item>
  <t-collsape-item :name="3">
    3、写作受体
    <template slot="content">
      <p>写作受体，即写作活动的接受对象，一般谓之读者。</p>
      <p>作为写作活动中的一个要素，其价值和地位正随着网络时代的到来在日益受到人们的重视。一个读者至上的时代正在到来。商家宣称，“顾客是上帝”；那么，可以做个简单的类比——“读者是上帝”。</p>
    </template>
  </t-collsape-item>
  <t-collsape-item :name="4">
    4、写作载体
    <template slot="content">
      <p>一般而言，写作载体是指书面文章。</p>
      <p>具体来讲，写作载体是构成写作行为的、以语言文字有规律的排列传递信息的组织系统，通常由主题、材料、结构、语言这四个基本要素构成。</p>
      <p>对于传统的写作活动而言，写作载体的存在形式主要是纸质媒介，文章作品依托其呈现在世人面前。</p>
      <p>而随着电脑和互联网的日渐普及，电脑及网络作为新的写作载体形式正在受到越来越多的关注，一些有识之士分别就网络文学、短信文学、博客写作等等展开研讨。</p>
    </template>
  </t-collsape-item>
</t-collsape>

<script>
export default {
  data () {
    return {
      val: 1
    }
  }
}
</script>
```
:::
