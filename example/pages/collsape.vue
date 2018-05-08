<template>
  <div>
    <guide title="Collsape 折叠面板" des="通过折叠隐藏或显示主要内容"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">通过控制绑定值类改变每个折叠面板的显示或者隐藏</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24" style="margin-bottom: 50px">
            <t-collsape v-model="val1">
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
          </t-col>
        </t-row>
      </div>
      <collsape-normal/>
    </div>

    <div class="demo-block">
      <div class="title">手风琴模式</div>
      <div class="sub-title">只能同时展开一个面板</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24" style="margin-bottom: 50px">
            <t-collsape v-model="val2" accordion>
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
          </t-col>
        </t-row>
      </div>
      <collsape-accordion/>
    </div>

    <div class="demo-block">
      <div class="title">内嵌面板</div>
      <div class="sub-title">可以在面板内部嵌套面板</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24" style="margin-bottom: 50px">
            <t-collsape v-model="val3">
              <t-collsape-item :name="1">
                1、写作载体
                <template slot="content">
                  <p>一般而言，写作载体是指书面文章。</p>
                  <p>具体来讲，写作载体是构成写作行为的、以语言文字有规律的排列传递信息的组织系统，通常由主题、材料、结构、语言这四个基本要素构成。</p>
                  <p>对于传统的写作活动而言，写作载体的存在形式主要是纸质媒介，文章作品依托其呈现在世人面前。</p>
                  <p>而随着电脑和互联网的日渐普及，电脑及网络作为新的写作载体形式正在受到越来越多的关注，一些有识之士分别就网络文学、短信文学、博客写作等等展开研讨。</p>
                </template>
              </t-collsape-item>
              <t-collsape-item :name="2">
                2、内嵌面板
                <template slot="content">
                  <t-collsape v-model="val4">
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
                </template>
              </t-collsape-item>
            </t-collsape>
          </t-col>
        </t-row>
      </div>
      <collsape-contain/>
    </div>

    <div class="api-docs">
      <t-divider content="Collsape Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="collsapeApis">
          <t-table-column label="属性" prop="name"/>
          <t-table-column label="描述" prop="desc"/>
          <t-table-column label="类型" prop="type"/>
          <t-table-column label="可选值" prop="choice"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Collsape Item Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="collsapeItemApis">
          <t-table-column label="属性" prop="name"/>
          <t-table-column label="描述" prop="desc"/>
          <t-table-column label="类型" prop="type"/>
          <t-table-column label="可选值" prop="choice"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import CollsapeNormal from '../documents/collsape/collsape-normal.md'
import CollsapeAccordion from '../documents/collsape/collsape-accordion.md'
import CollsapeContain from '../documents/collsape/collsape-contain.md'

export default {
  components: {
    CollsapeNormal,
    CollsapeContain,
    CollsapeAccordion
  },

  data () {
    return {
      collsapeApis: [
        {name: 'v-model', desc: '绑定展开值', type: '*', choice: '—', default: '—'},
        {name: 'accordion', desc: '开启手风琴模式', type: 'Boolean', choice: '—', default: 'true'}
      ],
      collsapeItemApis: [
        {name: 'name', desc: '当前面板Item唯一key值', type: '*（必填）', choice: '—', default: '—'}
      ],
      val1: [1],
      val2: 1,
      val3: [1],
      val4: []
    }
  }
}
</script>

<style></style>
