<template>
  <section class="aside">
    <div class="mainmenu" ref="content-manager" v-showMenuItems>
      <div class="mainmenu-title">
        <div class="left">
          <span>
            <i class="iconfont">&#xe621;</i>
          </span>
          <span>内容管理</span>
        </div>
        <div class="right">
          <i class="iconfont arrow">&#xe634;</i>
        </div>
      </div>
      <div class="menu-items-container">
        <router-link class="menu-item" to="/content-manager/article">文章管理</router-link>
        <router-link class="menu-item" to="/content-manager/comment">评论管理</router-link>
      </div>
    </div>
    <div class="mainmenu" ref="user-manager" v-showMenuItems>
      <div class="mainmenu-title">
        <div class="left">
          <span>
            <i class="iconfont">&#xe621;</i>
          </span>
          <span>用户管理</span>
        </div>
        <div class="right">
          <i class="iconfont arrow">&#xe634;</i>
        </div>
      </div>
      <div class="menu-items-container">
        <router-link class="menu-item" to="/user-manager/new-user">新增用户</router-link>
        <router-link class="menu-item" to="/user-manager/active-user">新增用户</router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      mainTitles: ["content-manager", "user-manager"]
    };
  },
  methods: {
    // watch => $router, open drawer
    async showItems(mainTitle) {
      await this.$nextTick(function() {
        this.$refs[mainTitle].style.height = `${
          this.$refs[mainTitle].actualHeight
        }px`;
        this.$refs[
          mainTitle
        ].firstChild.childNodes[2].firstChild.style.transform = "rotate(90deg)";
        this.$refs[mainTitle].isStretch = true;
      });
    }
  },
  directives: {
    showMenuItems: {
      inserted: async function(el, binding, vnode) {
        await vnode.context.$nextTick(function() {
          // 获取容器div高，并且注册到el属性中
          el.actualHeight = el.scrollHeight;
          // 获取标题div高，并且注册到el属性中
          el.titleHeight = el.firstChild.offsetHeight;
          // 设置容器高等于标题高
          el.style.height = `${el.titleHeight}px`;
        });
        // 为标题注册点击事件
        el.firstChild.onclick = function() {
          var arrowIcon = el.firstChild.childNodes[2].firstChild;
          // isStretch 是否展开
          if (el.isStretch) {
            // 判断已经展开，那么就折叠
            el.style.height = `${el.titleHeight}px`;
            arrowIcon.style.transform = "rotate(0deg)";
          } else {
            // 判读已经折叠，那么就展开
            // 展开前对其他其他菜单全部折叠
            var arrMenu = vnode.context.$refs;
            if (Object.keys(arrMenu).length !== 0) {
              for (const key in arrMenu) {
                if (arrMenu[key].isStretch) {
                  arrMenu[key].style.height = `${arrMenu[key].titleHeight}px`;
                  arrMenu[
                    key
                  ].firstChild.childNodes[2].firstChild.style.transform =
                    "rotate(0deg)";
                  arrMenu[key].isStretch = !arrMenu[key].isStretch;
                }
              }
            }
            el.style.height = `${el.actualHeight}px`;
            arrowIcon.style.transform = "rotate(90deg)";
          }
          // 取反设置
          el.isStretch = !el.isStretch;
        };
      },
      unbind: function(el) {
        el.onclick = null;
      }
    }
  },
  watch: {
    // 监听路由，激活路由指定菜单
    $route: {
      handler: function(val) {
        for (let i = 0; i < this.mainTitles.length; i++) {
          if (val.path.indexOf(this.mainTitles[i]) > 0) {
            setTimeout(() => {
              this.showItems(this.mainTitles[i]);
            }, 0);
          }
        }
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 10px;
}
.mainmenu {
  box-sizing: border-box;
  overflow: hidden;
  transition: height 0.15s ease-in-out;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
.mainmenu-title {
  width: 100%;
  cursor: pointer;
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
  box-sizing: border-box;
}

.mainmenu-title .left {
  float: left;
}
.mainmenu-title .right {
  float: right;
}

.mainmenu-title .left span i {
  font-size: 22px;
}

.mainmenu-title .left span {
  font-size: 20px;
  padding-left: 10px;
}

.mainmenu-title .arrow {
  display: inline-block;
  font-size: 14px;
  transform: rotate(0deg);
  transition: transform 0.15s ease-in-out;
}
.menu-items-container {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: rgb(7, 58, 96);
}
.menu-item {
  display: block;
  height: 50px;
  line-height: 50px;
  padding-left: 70px;
  border-left: 3px solid #2be2ee;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
}

.menu-item:hover {
  background-color: rgb(6, 46, 77);
}
</style>


