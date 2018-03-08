<template>
  <div class="docs-demo-wrapper">
    <div class="demo-container">
      <div class="docs-demo docs-demo--expand">
        <div class="highlight-wrapper" :style="{height: isExpand ? (this.$slots.highlight[0].elm.clientHeight + 40) + 'px' : '0'}">
          <slot name="highlight"></slot>
        </div>
      </div>
    </div>
    <span class="docs-trans docs-demo__triangle" @click="toggle"><i class="fa fa-caret-down" :class="[
      isExpand ? 'rotate' : ''
    ]"></i><span>{{isExpand ? '隐藏代码' : '显示代码'}}</span></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isExpand: false
    }
  },
  methods: {
    toggle () {
      this.isExpand = !this.isExpand
    }
  }
}
</script>

<style>
  section {
    width: 100%;
    margin: auto;
  }
  .demo-block {
    margin-top: 20px;
    margin-bottom: 20px;
    float: left;
    width: 100%;
    border-radius: 3px;
    transition: .2s;
    box-shadow: 0 0 6px 1px #ebebeb;
  }

  .demo-block .subtitle {
    line-height: 45px;
    font-weight: 500;
    font-size: 18px;
    padding-left: 25px;
    border-bottom: 1px solid #ebebeb;
  }

  .demo-block .source {
    padding: 25px;
  }
  .demo-container {
    transition: all .3s ease;
    overflow: hidden;
  }

  .docs-demo {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    font-size: 13px;
    background-color: #fafafa;
    border-top: none;
  }

  .docs-demo pre {
    text-align: left;
  }

  .docs-demo pre code {
    font-family: Consolas, Menlo, Courier, monospace;
    line-height: 22px;
    border: none;
    color: #3c3c3c;
  }

  .docs-demo-wrapper {
    transition: all .3s;
    float: left;
    width: 100%;
  }

  .docs-trans {
    width: 100%;
    text-align: center;
    display: block;
    color: #C5D9E8;
    font-size: 12px;
    padding: 10px 0;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    transition:all .3s;
    border-top: 1px solid #eee;
    position: relative;
  }

  .docs-trans span {
    position: absolute;
    display: inline-block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 30px;
    line-height: 30px;
    margin: auto;
    margin-left: 70px;
    opacity: 0;
    transition:all .3s;
  }

  .docs-trans i.rotate {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .docs-trans i {
    height: 30px;
    line-height: 30px;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto auto;
    margin-left: 0;
    transition: all .3s;
  }

  .demo-block:hover .docs-trans {
    background-color: #FAFBFC;
    color: #409EFF;
  }

  .demo-block:hover .docs-trans span {
    opacity: 1;
    margin-left: 0;
  }
  .demo-block:hover .docs-trans i {
    margin-left: -70px;
  }

  .docs-demo__code,
  .highlight-wrapper,
  .docs-demo__meta {
    padding: 0 20px;
    overflow-y: auto;
  }

  .docs-demo__code {
    border-bottom: 1px solid #eee;
  }

  .docs-demo.docs-demo--expand .docs-demo__meta {
    border-bottom: 1px dashed #e9e9e9;
  }

  .docs-demo.docs-demo--expand .docs-demo__triangle {
    transform: rotate(180deg);
  }

  .highlight-wrapper {
    display: block;
    height: 0;
    transition: all .3s;
  }

  .highlight-wrapper p,
  pre {
    margin: 20px 0;
  }

  .highlight-wrapper .hljs {
    padding: 0;
  }

  .docs-demo.docs-demo--expand .highlight-wrapper {
    height: 200px;
  }

  .docs-demo__code__mobi {
    height: 620px;
    margin: 20px 0;
  }

  .docs-demo__code__mobi__header {
    border-radius: 4px 4px 0 0;
    background: -webkit-linear-gradient(rgba(55, 55, 55, .98), #545456);
    background: linear-gradient(rgba(55, 55, 55, .98), #545456);
    text-align: center;
    padding: 8px;
  }

  .docs-demo__code__mobi__header img {
    width: 100%;
  }

  .docs-demo__code__mobi__header .url-box {
    height: 28px;
    line-height: 28px;
    color: #fff;
    padding: 0 3px;
    background-color: #a2a2a2;
    margin: 10px auto 0;
    border-radius: 4px;
    white-space: nowrap;
    overflow-x: auto;
  }

  .docs-demo__code__mobi__content iframe {
    width: 100%;
    border: 0;
    height: 548px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-black {
    background: #99a9bf;
  }
  .bg-gray {
    background: #d3dce6;
  }
  .bg-gray-light {
    background: #e5e9f2;
  }

  /*

  Colorbrewer theme
  Original: https://github.com/mbostock/colorbrewer-theme (c) Mike Bostock <mike@ocks.org>
  Ported by Fabrício Tavares de Oliveira

  */

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #fff;
  }

  .hljs,
  .hljs-subst {
    color: #000;
  }

  .hljs-string,
  .hljs-meta,
  .hljs-symbol,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-addition {
    color: #756bb1;
  }

  .hljs-comment,
  .hljs-quote {
    color: #636363;
  }

  .hljs-number,
  .hljs-regexp,
  .hljs-literal,
  .hljs-bullet,
  .hljs-link {
    color: #31a354;
  }

  .hljs-deletion,
  .hljs-variable {
    color: #88f;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-title,
  .hljs-section,
  .hljs-built_in,
  .hljs-doctag,
  .hljs-type,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-strong {
    color: #3182bd;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-attribute {
    color: #e6550d;
  }

</style>
