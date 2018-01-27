<template>
    <label class="t-checkbox"  :class="{
        'is-checked': isChecked
      }">
      <span class="t-checkbox__label" v-if="labelLeft && !!label">{{ label }}</span>
      <span class="t-checkbox__inner">
        <i class="fa fa-check"></i>
      </span>
      <span class="t-checkbox__label" v-if="!labelLeft && !!label">{{ label }}</span>
      <input type="checkbox" v-model="isChecked">
    </label>
</template>

<script>
import arrayHelper from '../../mixins/arrayHelper'
export default {
  name: 't-checkbox',
  mixins: [arrayHelper],
  data () {
    return {
      isChecked: null,
      isGroup: false,
      store: null
    }
  },
  props: {
    label: String,
    labelLeft: Boolean,
    val: String
  },
  mounted () {
    this._isGroup()
  },
  methods: {
    _isGroup () {
      if (this.$parent.$options.name === 't-checkbox-group') {
        this.isGroup = true
        this.store = this.$parent.values
      }
    }
  },
  watch: {
    isChecked (val) {
      if (this.isGroup) {
        if (val) {
          this.store.push(this.val)
        } else {
          arrayHelper.remove(this.store, this.val)
        }
      } else {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
