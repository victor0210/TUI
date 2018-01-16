<template>
  <div class="docs-demo-wrapper">
    <div :style="{height: isExpand ? 'auto' : '0'}" class="demo-container">
      <div class="docs-demo docs-demo--expand">
        <div class="highlight-wrapper">
          <slot name="highlight"></slot>
        </div>
      </div>
    </div>
    <span class="docs-trans docs-demo__triangle" @click="toggle">{{isExpand ? '隐藏代码' : '显示代码'}}</span>
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

<style scoped>
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: white;
    color: black;
  }

  .hljs-comment,
  .hljs-quote {
    color: #800;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-section,
  .hljs-title,
  .hljs-name {
    color: #008;
  }

  .hljs-variable,
  .hljs-template-variable {
    color: #660;
  }

  .hljs-string,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-regexp {
    color: #080;
  }

  .hljs-literal,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-meta,
  .hljs-number,
  .hljs-link {
    color: #066;
  }

  .hljs-title,
  .hljs-doctag,
  .hljs-type,
  .hljs-attr,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-params {
    color: #606;
  }

  .hljs-attribute,
  .hljs-subst {
    color: #000;
  }

  .hljs-formula {
    background-color: #eee;
    font-style: italic;
  }

  .hljs-selector-id,
  .hljs-selector-class {
    color: #9B703F
  }

  .hljs-addition {
    background-color: #baeeba;
  }

  .hljs-deletion {
    background-color: #ffc8bd;
  }

  .hljs-doctag,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs a {
    color: inherit;
  }

  .hljs a:focus,
  .hljs a:hover {
    color: inherit;
    text-decoration: underline;
  }

  .demo-container {
    transition: max-height .3s ease;
    overflow: hidden;
  }

  .docs-demo {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #F7F7F7;
    border: 1px solid #e2ecf4;
    border-top: none;
  }

  .docs-demo pre {
    text-align: left;
  }

  .docs-demo pre code {
    font-family: Consolas, Menlo, Courier, monospace;
    line-height: 22px;
    border: none;
  }

  .docs-trans {
    width: 100%;
    text-align: center;
    display: inline-block;
    color: #C5D9E8;
    font-size: 12px;
    padding: 10px 0;
    background-color: #FAFBFC;
    cursor: pointer;
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
    display: none;
  }

  .highlight-wrapper p,
  pre {
    margin: 0;
  }

  .highlight-wrapper .hljs {
    padding: 0;
  }

  .docs-demo.docs-demo--expand .highlight-wrapper {
    display: block;
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
</style>
