<template>
  <div>
    <guide title="标签页" des="用于数据切换类别显示"/>
    <div class="demo-block">
      <div class="subtitle">基础用法</div>
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
            <t-tabs v-model="tabValue" :position="position" style="height: 200px">
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
      <div class="subtitle">Draggable</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tabs v-model="tabValue" tab-draggable>
              <t-tab-panel title="旅游住店">
                旅游住店
              </t-tab-panel>
              <t-tab-panel title="美食餐饮">
                美食餐饮
              </t-tab-panel>
              <t-tab-panel title="娱乐服务">
                娱乐服务
              </t-tab-panel>
            </t-tabs>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>
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
      position: 'top'
    }
  }
}
</script>
