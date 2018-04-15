<template>
  <div>
    <guide title="标签页" des="用于数据切换类别显示"/>
    <div class="demo-block">
      <div class="subtitle">基础用法（适用于tab页较少的场景）</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tabs v-model="tabValue">
              <t-tab-panel title="旅游住店">
                <h3>旅游住店打</h3>
              </t-tab-panel>
              <t-tab-panel title="美食餐饮">
                <h3>美食餐饮</h3>
              </t-tab-panel>
              <t-tab-panel title="娱乐服务">
                <h3>娱乐服务</h3>
              </t-tab-panel>
            </t-tabs>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">卡片样式</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tabs v-model="tabValue" type="card">
              <t-tab-panel title="旅游住店">
                <h3>旅游住店打</h3>
              </t-tab-panel>
              <t-tab-panel title="美食餐饮">
                <h3>美食餐饮</h3>
              </t-tab-panel>
              <t-tab-panel title="娱乐服务">
                <h3>娱乐服务</h3>
              </t-tab-panel>
            </t-tabs>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">box样式（适用于tab页较多的场景）</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tabs v-model="tabValue" type="box">
              <t-tab-panel title="旅游住店">
                <h3>旅游住店打</h3>
              </t-tab-panel>
              <t-tab-panel title="美食餐饮">
                <h3>美食餐饮</h3>
              </t-tab-panel>
              <t-tab-panel title="娱乐服务">
                <h3>娱乐服务</h3>
              </t-tab-panel>
            </t-tabs>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">不同布局</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-radio-group v-model="position">
              <t-radio label="top" val="top"/>
              <t-radio label="left" val="left"/>
              <t-radio label="bottom" val="bottom"/>
              <t-radio label="right" val="right"/>
            </t-radio-group>
          </t-col>
          <t-col :span="24">
            <t-tabs v-model="tabValue" :position="position" style="height: 200px" type="box">
              <t-tab-panel title="旅游住店">
                <h3>旅游住店打</h3>
              </t-tab-panel>
              <t-tab-panel title="美食餐饮">
                <h3>美食餐饮</h3>
              </t-tab-panel>
              <t-tab-panel title="娱乐服务">
                <h3>娱乐服务</h3>
              </t-tab-panel>
            </t-tabs>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">自定义Title</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tabs v-model="tabValue" tab-draggable>
              <t-tab-panel>
                <span slot="title"><i class="fa fa-home"></i> 旅游住店</span>
                旅游住店
              </t-tab-panel>
              <t-tab-panel title="美食餐饮">
                <span slot="title"><i class="fa fa-coffee"></i> 旅游住店</span>
                美食餐饮
              </t-tab-panel>
              <t-tab-panel title="娱乐服务">
                <span slot="title"><i class="fa fa-paper-plane"></i> 娱乐服务</span>
                娱乐服务
              </t-tab-panel>
            </t-tabs>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可编辑</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tabs v-model="tabValue" editable @tab-remove="removeHandler" type="card">
              <t-tab-panel
                v-for="t in tabs"
                :title="t.title"
                :key="t.title"
              >
                {{ t.content }}
              </t-tab-panel>
            </t-tabs>
          </t-col>
          <t-col style="margin-top: 20px">
            <t-button size="sm" @click="addTab">add tab</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">自动填满宽度(适用于标签不多的场景)</div>-->
      <!--<div class="source">-->
        <!--<t-row :gutter="20">-->
          <!--<t-col :span="24">-->
            <!--<t-tabs v-model="tabValue" editable @tab-remove="removeHandler" inline-flex>-->
              <!--<t-tab-panel-->
                <!--v-for="t in tabs"-->
                <!--:title="t.title"-->
                <!--:key="t.title"-->
              <!--&gt;-->
                <!--{{ t.content }}-->
              <!--</t-tab-panel>-->
            <!--</t-tabs>-->
          <!--</t-col>-->
          <!--<t-col style="margin-top: 20px">-->
            <!--<t-button size="sm" @click="addTab">add tab</t-button>-->
          <!--</t-col>-->
        <!--</t-row>-->
      <!--</div>-->
      <!--<radio-group/>-->
    <!--</div>-->
  </div>
</template>
<script>
import RadioGroup from '../documents/radio/radioGroup.md'

export default {
  components: {
    RadioGroup
  },

  data () {
    return {
      tabValue: '',
      position: 'top',
      tabs: [
        {
          title: '旅游住店',
          content: '旅游住店'
        },
        {
          title: '美食餐饮',
          content: '美食餐饮'
        },
        {
          title: '娱乐服务',
          content: '娱乐服务'
        },
      ]
    }
  },

  methods: {
    removeHandler (idx) {
      this.tabs.splice(idx, 1)
    },
    addTab () {
      this.tabs.push({
        title: 'New Tab',
        content: 'new Tab'
      })
    }
  }
}
</script>
