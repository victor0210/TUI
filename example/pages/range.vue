<template>
  <div>
    <guide title="Range 滑条" des="用于可拖动值变化的输入组件"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">不同状态的提示信息</div>
      <div class="source">
        <div class="half">
          <t-divider content="默认选择模式" content-align="left"/>
          <t-slider v-model="v"/>
        </div>
        <div class="half">
          <t-divider content="区间选择模式" content-align="left"/>
          <t-slider v-model="vRange" type="range"/>
        </div>
      </div>
      <slider-normal/>
    </div>

    <div class="demo-block">
      <div class="title">选择范围</div>
      <div class="sub-title">设置可选值的上下限值范围，可为负数</div>
      <div class="source">
        <t-row>
          <t-col span="8">
            <p>选择范围：-10 ~ 10，初始值：0</p>
            <t-slider v-model="v2" :min="-10" :max="10"/>
          </t-col>
        </t-row>
      </div>
      <slider-normal/>
    </div>

    <div class="demo-block">
      <div class="title">定义单位值</div>
      <div class="sub-title">定义单位值的大小, 注意：如果当你定义的单位足够小，slider宽度也很小的时候，值无法精确取到，因为页面操作偏移是以像素为单位，可对比下列第二个和第三个demo</div>
      <div class="source">
        <div class="half">
          <t-divider content="间隔为10" content-align="left"/>
          <t-slider v-model="v31" :min="0" :max="100" :unit="10"/>
        </div>
        <div class="half">
          <t-divider content="间隔为0.1（不精确）" content-align="left"/>
          <t-slider v-model="v32" :min="0" :max="60" :unit="0.1"/>
        </div>
        <div class="panel">
          <t-divider content="间隔为0.1（较精确）" content-align="left"/>
          <t-slider v-model="v33" :min="0" :max="60" :unit="0.1"/>
        </div>
      </div>
      <slider-normal/>
    </div>

    <div class="demo-block">
      <div class="title">显示分割线</div>
      <div class="sub-title">显示每个单位值的分割线</div>
      <div class="source">
        <t-row>
          <t-col span="8">
            <t-slider v-model="v4" :min="0" :max="10" divide-line/>
          </t-col>
        </t-row>
      </div>
      <slider-normal/>
    </div>
  </div>
</template>
<script>
import SliderNormal from '../documents/slider/slider-normal.md'
import SliderRange from '../documents/slider/slider-range.md'
import SliderUnit from '../documents/slider/slider-unit.md'
import SliderDivide from '../documents/slider/slider-divide.md'

export default {
  components: {
    SliderNormal,
    SliderRange,
    SliderUnit,
    SliderDivide
  },
  data () {
    return {
      v: 10,
      vRange: [20, 70],
      v2: 0,
      v31: 10,
      v32: 10,
      v33: 0.5,
      v4: 10,
      alertApis: [
        {name: 'content', desc: '提示主文本', type: 'String', choice: '—', default: '—'},
        {name: 'sub', desc: '辅助文本', type: 'String', choice: '—', default: '—'},
        {name: 'type', desc: '提示框类型', type: 'String', choice: 'success/info/warning/danger', default: '—'},
        {name: 'closeText', desc: '关闭文本', type: 'String', choice: '—', default: '—'},
        {name: 'icon', desc: '自定义图标类名', type: 'String', choice: '—', default: '—'},
        {name: 'closable', desc: '是否可关闭', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'showIcon', desc: '是否显示Icon', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'textCenter', desc: '文本居中', type: 'Boolean', choice: '—', default: 'false'}
      ]
    }
  }
}
</script>
