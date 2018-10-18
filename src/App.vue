<template>
  <div id="app">
    <!-- 高度 200px -->
    <div class="header">
      <div class="top">
        <header-title class="left"></header-title>
        <header-user-info class="right"></header-user-info>
      </div>
      <nav-bar class="bottom"></nav-bar>
    </div>
    <section class="container">
      <!-- 宽度 280px -->
      <div class="aside">
        <left-aside></left-aside>
      </div>
      <div class="main">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import LeftAside from "@/components/Aside/Aside";
import HeaderTitle from "@/components/Layout/HeaderTitle";
import HeaderUserInfo from "@/components/Layout/HeaderUserInfo";

import NavBar from "@/components/Layout/NavBar";

export default {
  name: "App",
  components: {
    LeftAside,
    HeaderTitle,
    NavBar,
    HeaderUserInfo
  }
};
</script>

<style>
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
body,
form,
fieldset,
input,
textarea,
blockquote,
p {
  padding: 0;
  margin: 0;
}
a {
  color: #000;
  text-decoration: none;
}
li {
  list-style-type: none;
}
img {
  vertical-align: top;
  border: 0;
}
ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

th,
td {
  padding: 0px;
}

.clearfix:after {
  content: "";
  display: block;
  height: 0;
  line-height: 0;
  visibility: hidden;
  clear: both;
}
@font-face {
  font-family: "iconfont"; /* project id 858289 */
  src: url("//at.alicdn.com/t/font_858289_ea33rbb0gv.woff") format("woff");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

/* ---------------------------------------------------------- */

html {
  font-family: Helvetica, Arial, sans-serif;
}
html,
body {
  height: 100%;
  background: url(./assets/bg.png) left top;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
}
#app {
  height: 100%;
  overflow: hidden;
  position: relative;
  /* display: flex;
  flex-direction: column; */
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  background-image: linear-gradient(rgb(12, 29, 64), rgb(13, 25, 54));
  box-sizing: border-box;
}
.header .top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 18px;
  padding-left: 25px;
  padding-right: 12px;
  box-sizing: border-box;
}

.header .top .left {
  float: left;
}

.header .top .right {
  float: right;
}

.header .bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: 25px;
  box-sizing: border-box;
}

.container {
  position: absolute;
  top: 150px;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
}

.aside {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 280px;
  box-sizing: border-box;
}

.main {
  background-color: #fff;
  overflow-x: hidden;
  position: absolute;
  left: 280px;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
.active {
  color: #26c5d1 !important;
}
</style>
