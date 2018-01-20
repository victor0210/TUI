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

<style>
  section {
    /*width: 1000px;*/
    margin: auto;
  }
  .demo-block {
    margin-top: 20px;
    margin-bottom: 20px;
    float: left;
    width: 100%
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
    color: #fafafa;
  }

  .docs-demo-wrapper {
    float: left;
    width: 100%;
    margin-bottom: 100px;
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
    background: #3c3c3c;
  }

  .highlight-wrapper p,
  pre {
    margin: 20px 0;
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

   /*
    *-------------------------- Highlight Style -----------------------------*/

  /* Tomorrow Night Eighties Theme */
  /* Original theme - https://github.com/chriskempson/tomorrow-theme */
  /* http://jmblog.github.com/color-themes-for-google-code-highlightjs */

  /* Tomorrow Comment */
  .hljs-comment,
  .hljs-quote {
    color: #999999;
  }

  /* Tomorrow Red */
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-regexp,
  .hljs-deletion {
    color: #f2777a;
  }

  /* Tomorrow Orange */
  .hljs-number,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-type,
  .hljs-params,
  .hljs-meta,
  .hljs-link {
    color: #f99157;
  }

  /* Tomorrow Yellow */
  .hljs-attribute {
    color: #ffcc66;
  }

  /* Tomorrow Green */
  .hljs-string,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition {
    color: #99cc99;
  }

  /* Tomorrow Blue */
  .hljs-title,
  .hljs-section {
    color: #6699cc;
  }

  /* Tomorrow Purple */
  .hljs-keyword,
  .hljs-selector-tag {
    color: #cc99cc;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    background: #2d2d2d;
    color: #cccccc;
    padding: 0.5em;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
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
  .bg-inverse {
    background: #6c6c6c;
  }
  .bg-cyan {
    background: #ccc;
  }
  .bg-cyan-light {
    background: #eaeaea;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
