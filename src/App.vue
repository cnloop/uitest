<template>
  <div id="app">
    <!-- 高度 200px -->
    <div class="header">
      <div class="top">
        <header-title></header-title>
        <header-user-info></header-user-info>
      </div>
      <nav-bar class="bottom"></nav-bar>
    </div>
    <section class="container">
      <!-- 宽度 280px -->
      <left-aside class="aside"></left-aside>
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
html {
  font-family: Helvetica, Arial, sans-serif;
}
html,
body {
  height: 100%;
  background: url(./assets/bg.png) left top;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  height: 150px;
  background-image: linear-gradient(rgb(12, 29, 64), rgb(13, 25, 54));
  padding-top: 12px;
  padding-left: 25px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  height: 100%;
  display: flex;
}

.aside {
  width: 280px;
  height: 100%;
}

.main {
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow-x: hidden;
  /* overflow-y: hidden; */
}
.active {
  color: #26c5d1 !important;
}

@font-face {
  font-family: "iconfont"; /* project id 858289 */
  src: url("//at.alicdn.com/t/font_858289_jkoy0qe09aa.woff") format("woff");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
