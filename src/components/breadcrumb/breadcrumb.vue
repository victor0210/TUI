<script>
import TBreadCrumb from '../breadcrumbItem/index'
export default {
  name: 't-breadcrumb',

  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorIcon: String
  },

  render (h) {
    const _this = this._self

    let items = []
    this.$slots.default && this.$slots.default.forEach(function (el, idx) {
      if (el.tag && el.componentOptions.tag === 't-breadcrumb-item') {
        let _props = idx === _this.$slots.default.length - 1 ? el.componentOptions.propsData : Object.assign({
          separator: _this.separator,
          separatorIcon: _this.separatorIcon
        }, el.componentOptions.propsData)
        items.push(h(
          TBreadCrumb, {
            props: _props
          }, [
            el.componentOptions.children
          ]
        ))
      }
    })
    return h(
      'div', {
        class: 't-breadcrumb'
      }, [
        items
      ]
    )
  }
}
</script>
