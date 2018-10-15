<template>
  <section v-selectItem class="sanSelect">
    <span>{{selectText}}</span>
    <i class="iconfont" ref="iconArrow">&#xe600;</i>
    <div class="DropDownMenu" v-show="isSelected" ref>
      <span>同意</span>
      <span>不同意</span>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isSelected: false,
      selectText: "请选择"
    };
  },
  watch: {
    isSelected: {
      handler: function(val) {
        this.$nextTick(function() {
          if (val) {
            this.$refs.iconArrow.style.transform = "rotate(-180deg)";
          } else {
            this.$refs.iconArrow.style.transform = "rotate(0deg)";
          }
        });
      },
      immediate: true
    }
  },
  directives: {
    selectItem: {
      inserted: async function(el, binding, vnode) {
        await vnode.context.$nextTick(function() {
          el.onclick = function(event) {
            event = event || window.event;
            if (event || event.stopPropagation) {
              event.stopPropagation();
            } else {
              event.cancelBubble = true;
            }
            vnode.context.isSelected = !vnode.context.isSelected;
          };
          document.addEventListener("click", function() {
            vnode.context.isSelected = false;
          });
        });
      }
    }
  }
};
</script>
<style scoped>
.sanSelect {
  width: 136px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #d2cdcd;
  border-radius: 2px;
  display: inline-block;
  box-sizing: border-box;
  padding: 0px 10px;
  position: relative;
}
.sanSelect i {
  float: right;
  transition: transform 0.2s;
}

.sanSelect > span {
  float: left;
}

.sanSelect span {
  cursor: pointer;
}
.DropDownMenu {
  position: absolute;
  top: 44px;
  left: -1px;
  min-width: 136px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 1px 5px 0px #ccc;
}
.DropDownMenu span {
  display: block;
  padding: 0px 11px;
  /* margin-left: -1px; */
  /* margin-bottom: -1px; */
  line-height: 35px;
}
.DropDownMenu span:hover {
  /* background-color: #2666e8; */
  background-color: #f5f7fa;
}
</style>

