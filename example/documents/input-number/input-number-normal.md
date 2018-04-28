::: demo
```html
<t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" /></t-col></t-row>
<t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="primary"/></t-col></t-row>
<t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="success"/></t-col></t-row>
<t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="warning"/></t-col></t-row>
<t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="danger"/></t-col></t-row>
<t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="info"/></t-col></t-row>
<t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="inverse"/></t-col></t-row>

<script>
export default {
  data () {
    return {
      n: 1
    }
  }
}
</script>
```
:::
