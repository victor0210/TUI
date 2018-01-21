<template>
  <div id="app" class="docs">
    <div id="header" class="clearFix">
      <router-link to="/" id="logo">TUI</router-link>
      <ul id="nav">
        <li>
          <form id="search-form">
            <span class="auto-complete">
              <input type="text" class="search-query">
            </span>
          </form>
        </li>
        <li class="nav-dropDown-container">
          <a class="nav-link current">指南</a><span class="arrow"></span>
          <ul class="nav-dropDown">
            <li>
              <ul>
                <li><a href="/" class="nav-link current">教程</a></li>
                <li><a href="/" class="nav-link">API</a></li>
                <li><a href="/" class="nav-link">风格指南 (beta)</a></li>
                <li><a href="/" class="nav-link">示例</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-dropDown-container">
          <a class="nav-link current">组件</a><span class="arrow"></span>
          <ul class="nav-dropDown">
            <li>
              <ul>
                <li><a href="/" class="nav-link current">教程</a></li>
                <li><a href="/" class="nav-link">API</a></li>
                <li><a href="/" class="nav-link">风格指南 (beta)</a></li>
                <li><a href="/" class="nav-link">示例</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div id="main">
      <div class="sidebar">
        <div class="sidebar-inner">
          <div class="list">
            <h2>教程</h2>
            <ul class="menu-root">
              <li><h3>基础</h3></li>
              <li>
                <a href="/" class="sidebar-link">安装</a>
              </li>
              <li>
                <a href="/" class="sidebar-link current">介绍</a>
                <ul class="menu-sub">
                  <li><a class="section-link active" href="/layout" target="_self">栅格布局</a>
                  </li>
                  <li><a href="/button">按钮</a></li>
                  <li><a href="#声明式渲染">声明式渲染</a></li>
                  <li><a href="#条件与循环">条件与循环</a></li>
                  <li><a href="#处理用户输入">处理用户输入</a></li>
                  <li><a href="#组件化应用构建">组件化应用构建</a></li>
                  <ul>
                    <li><a href="#与自定义元素的关系">与自定义元素的关系</a></li>
                  </ul>
                  <li><a href="#准备好了吗？">准备好了吗？</a></li>
                </ul>
              </li>
              <li><h3>过渡 &amp; 动画</h3></li>
              <li>
                <a href="/v2/guide/transitions.html" class="sidebar-link">进入/离开 &amp; 列表过渡</a>
              </li>
              <li>
                <a href="/v2/guide/transitioning-state.html" class="sidebar-link">状态过渡</a>
              </li>
              <li><h3>可复用性 &amp; 组合</h3></li>
              <li>
                <a href="/v2/guide/mixins.html" class="sidebar-link">混合</a>
              </li>
              <li>
                <a href="/v2/guide/custom-directive.html" class="sidebar-link">自定义指令</a>
              </li>
              <li><h3>工具</h3></li>
              <li>
                <a href="/v2/guide/deployment.html" class="sidebar-link">生产环境部署</a>
              </li>
              <li>
                <a href="/v2/guide/single-file-components.html" class="sidebar-link">单文件组件</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "assets/css/common";
  @import "assets/css/fontawesome.css";
  @import "../src/styles/index.scss";

  .docs {
    padding-top: 61px;
    #header {
      position: fixed;
      width: 100%;
      top: 0;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
      transition: background-color 0.3s ease-in-out;
      background-color: #fff;
      height: 60px;
      padding: 10px 60px;
      z-index: 2;
      #logo {
        display: inline-block;
        font-size: 18px;
        line-height: 40px;
        color: #2c3e50;
        font-weight: 500;
      }
      #nav {
        position: fixed;
        list-style-type: none;
        margin: 0;
        padding: 0;
        right: 60px;
        top: 10px;
        height: 40px;
        line-height: 40px;
        li {
          display: inline-block;
          position: relative;
          margin: 0 15px;
          #search-form {
            .auto-complete {
              position: relative;
              display: inline-block;
              .search-query {
                height: 30px;
                line-height: 30px;
                box-sizing: border-box;
                padding: 0 15px 0 30px;
                border: 1px solid #e3e3e3;
                color: #2c3e50;
                outline: none;
                border-radius: 15px;
                transition: border-color 0.2s ease;
                background: #fff url(./assets/img/search.png) 8px 5px no-repeat;
                background-size: 20px;
                vertical-align: middle !important;
              }

            }

          }

        }
        .nav-link {
          cursor: pointer;
          &:hover, &.current {
            border-bottom: 3px solid #42b983;
          }
        }
        .nav-dropDown-container {
          .arrow {
            pointer-events: none;
          }
          &:hover {
            .nav-dropDown {
              display: block;
              a, h4 {
                padding: 0 24px 0 20px;
              }
              a {
                color: #3a5169;
                font-size: 16px;
                display: block;
                &:hover {
                  color: #42b983;
                  border-bottom: none;
                }
              }
              .nav-link.current {
                border-bottom: none;
                &::after {
                  content: "";
                  width: 0;
                  height: 0;
                  border-left: 5px solid #42b983;
                  border-top: 3px solid transparent;
                  border-bottom: 3px solid transparent;
                  position: absolute;
                  top: 50%;
                  margin-top: -4px;
                  left: 8px;
                }
              }

            }
          }
        }
        .arrow {
          display: inline-block;
          vertical-align: middle;
          margin-top: -1px;
          margin-left: 6px;
          margin-right: -14px;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid #ccc;
        }
        .nav-dropDown {
          display: none;
          box-sizing: border-box;
          max-height: calc(100vh - 61px);
          overflow-y: auto;
          position: absolute;
          top: 100%;
          right: -15px;
          background-color: #fff;
          padding: 10px 0;
          border: 1px solid #ddd;
          border-bottom-color: #ccc;
          text-align: left;
          border-radius: 4px;
          white-space: nowrap;
          li {
            line-height: 28px;
            margin: 0;
            display: block;
          }
        }
      }
    }
    #main {
      padding: 0 190px 0 60px;
      .sidebar {
        width: 190px;
        height: 1000px;
        float: left;
        .sidebar-inner {
          .list {
            .menu-root {
              li {
                margin-top: 10px;
                .menu-sub {
                  font-size: 14px;
                  li {
                    margin-top: 5px;
                  }
                }
              }
            }
          }
          ul {
            padding-left: 15px;
          }
        }
      }
      .content {
        height: 1000px;
        min-width: 800px;
        max-width: 1400px;
        padding-left: 120px;
        padding-top: 42px;
        margin: 0 auto;
        text-align: center;
      }
    }
  }

</style>
