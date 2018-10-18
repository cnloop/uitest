<template>
    <section v-setCustomStyle class="sanCheckbox" :class="{sanCheckboxByChecked:isChecked.length}">
        <i v-setIconCustomStyle class="iconfont" v-show="isChecked.length">&#xe603;</i>
        <input type="checkbox" :value="$attrs.value" @click="fn" v-model="isChecked">
    </section>
</template>
<script>
export default {
  model: {
    prop: "checkedSets",
    event: "checkItem"
  },
  props: ["checkedSets"],
  data() {
    return {
      isChecked: []
    };
  },

  methods: {
    fn() {
      // 1.父组件数组是空的即可添加
      // 2.父组件数组不是空的，那么是添加还是删除就需要判断了
      if (!this.isChecked.length) {
        this.addItem();
      } else {
        this.addOrDeleteItem();
      }
      this.$emit("checkItem", this.checkedSets);
    },
    addItem() {
      // 父组件数组中不存在即添加
      this.checkedSets.push(this.$attrs.value);
    },
    addOrDeleteItem() {
      // 父组件数组中存在即可返回
      for (var i = 0; i < this.checkedSets.length; i++) {
        if (this.checkedSets[i] == this.$attrs.value) {
          return this.checkedSets.splice(i, 1);
        }
      }
      this.checkedSets.push(this.$attrs.value);
    },
    setFontSize(el, _attrs) {
      if (!_attrs.fontSize) return;
      el.style.fontSize = _attrs.fontSize;
    },
    setWith(el, _attrs) {
      if (!_attrs.width) return;
      el.style.width = _attrs.width;
    },
    setHeight(el, _attrs) {
      if (!_attrs.height) return;
      el.style.height = _attrs.height;
    },
    setBorderRadius(el, _attrs) {
      if (!_attrs.borderRadius) return;
      el.style.borderRadius = _attrs.borderRadius;
    },
    setIconFontSize(el, _attrs) {
      if (!_attrs.iconFontSize) return;
      el.style.fontSize = _attrs.iconFontSize;
    }
  },
  directives: {
    setCustomStyle: {
      inserted: async function(el, binding, vnode) {
        vnode.context.$nextTick(function() {
          var _attrs = vnode.context.$attrs;
          vnode.context.setFontSize(el, _attrs);
          vnode.context.setWith(el, _attrs);
          vnode.context.setHeight(el, _attrs);
          vnode.context.setBorderRadius(el, _attrs);
        });
      }
    },
    setIconCustomStyle: {
      inserted: async function(el, binding, vnode) {
        vnode.context.$nextTick(function() {
          var _attrs = vnode.context.$attrs;
          vnode.context.setIconFontSize(el, _attrs);
        });
      }
    }
  }
};
</script>
<style scoped>
.sanCheckbox {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  background-color: #fff;
}
.sanCheckbox > i {
  color: #fff;
  position: absolute;
  font-size: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}
.sanCheckbox > input {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  outline: none;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 99;
}

.sanCheckboxByChecked {
  background-color: #409eff;
  border-color: #409eff;
}
</style>
