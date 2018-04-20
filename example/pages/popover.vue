<template>
  <div>
    <guide title="弹出层" des="用于提示简单的信息"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-popover position="bottom">
              <t-button type="primary" size="lg">hover</t-button>
              <div slot="popover">
                <t-table :data="data" border stripe>
                  <t-table-column label="姓名" prop="name"/>
                  <t-table-column label="年龄" prop="age" />
                  <t-table-column label="身份" prop="role"/>
                  <t-table-column label="电话" prop="phone"/>
                </t-table>
              </div>
            </t-popover>

            <t-popover position="bottom" trigger="click" hide-on-click>
              <t-button type="primary" size="lg">click</t-button>
              <div slot="popover">
                <t-table :data="data" border stripe>
                  <t-table-column label="姓名" prop="name"/>
                  <t-table-column label="年龄" prop="age" />
                  <t-table-column label="身份" prop="role"/>
                  <t-table-column label="电话" prop="phone"/>
                </t-table>
              </div>
            </t-popover>

            <t-popover position="bottom" trigger="focus">
              <t-button type="primary" size="lg">focus</t-button>
              <div slot="popover">
                <t-table :data="data" border stripe>
                  <t-table-column label="姓名" prop="name"/>
                  <t-table-column label="年龄" prop="age" />
                  <t-table-column label="身份" prop="role"/>
                  <t-table-column label="电话" prop="phone"/>
                </t-table>
              </div>
            </t-popover>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">不同定位</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <div class="top" style="text-align: center">
              <t-popover position="top-left">
                <t-button type="primary">上左</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
              <t-popover position="top">
                <t-button type="primary">上边</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
              <t-popover position="top-right">
                <t-button type="primary">上右</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
            </div>
            <div class="left" style="width: 50%; float: left">
              <div style="text-align: center; margin-bottom: 20px;">
                <t-popover position="left-top">
                  <t-button type="primary">左上</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
            <div style="text-align: center; margin-bottom: 20px;">
              <t-popover position="left">
                  <t-button type="primary">左边</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
            <div style="text-align: center; margin-bottom: 20px;">
              <t-popover position="left-bottom">
                  <t-button type="primary">左下</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
            </div>
            <div class="right" style="width: 50%; float: left">
              <div style="text-align: center; margin-bottom: 20px;">
                <t-popover position="right-top">
                  <t-button type="primary">右上</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
              <div style="text-align: center; margin-bottom: 20px;">
                <t-popover position="right">
                  <t-button type="primary">右边</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
              <div style="text-align: center; margin-bottom: 20px;">
                <t-popover position="right-bottom">
                  <t-button type="primary">右下</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
            </div>
            <div class="bottom" style="text-align: center">
              <t-popover position="bottom-left">
                <t-button type="primary">下左</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
              <t-popover position="bottom">
                <t-button type="primary">下边</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
              <t-popover position="bottom-right">
                <t-button type="primary">下右</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
            </div>
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
      data: [
        {name: 'name2', age: 'ag2', phone: 'phone2', role: 'role2', a: 'a2a2a2a2a2a2a2a2a2', b: 'b2', c: 'c2', d: 'd2'},
        {name: 'name3', age: 'ag3', phone: 'phone3', role: 'role3', a: 'a3', b: 'b3', c: 'c3', d: 'd3'},
        {name: 'name1', age: 'ag1', phone: 'phone1', role: 'role1', a: 'a1', b: 'b1', c: 'c1', d: 'd1'},
        {name: 'name4', age: 'ag4', phone: 'phone4', role: 'role4', a: 'a4', b: 'b4', c: 'c4', d: 'd4'}
      ],
      msg: 'Welcome TUI !',
      msg2: 'Here is Popover!'
    }
  }
}
</script>

<style></style>
