::: demo
```html
<t-row :gutter="20">
  <t-col :span="6">
    <t-select label="请选择" v-model="v_1" remote :remote-method="remoteFunction1" searchable>
      <t-option v-for="item in remote_data_1" :key="item" :label="item" :val="item"/>
    </t-select>
  </t-col>
   <t-col :span="6">
    <t-select label="请选择" v-model="v_2" searchable multiple remote>
      <t-option :key="1" label="v1" val="v1"/>
      <t-option :key="2" label="v2" val="v2"/>
      <t-option :key="3" label="v3" val="v3"/>
      <t-option :key="4" label="v4" val="v4"/>
      <t-option :key="5" label="v5" val="v5"/>
      <t-option :key="6" label="v6" val="v6"/>
      <t-option :key="7" label="v7" val="v7"/>
      <t-option :key="8" label="v8" val="v8"/>
      <t-option :key="9" label="v9" val="v9"/>
    </t-select>
  </t-col>
</t-row>

<script>
export default {
  data () {
    return {
      v_1: '',
      v_2: [],
      remote_data_1: [],
      remote_data_source_1: ['v1', 'v2', 'v3', 'v4'],
      remote_data_2: [],
      remote_data_source_2: ['v5', 'v6', 'v7', 'v8']
    }
  },
  methods: {
    remoteFunction1 () {
      // ajax && response date filter => this.remote_data_source_1
      (this.remote_data_1 !== this.remote_data_source_1) && (this.remote_data_1 = this.remote_data_source_1)
    },
    remoteFunction2 () {
      (this.remote_data_1 !== this.remote_data_source_1) && (this.remote_data_1 = this.remote_data_source_1)
    },
  }
}
</script>
```
:::
