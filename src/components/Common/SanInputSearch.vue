<template>
    <div class="sanInputSearch" v-setContainerStyle>
        <input v-model="searchValue" v-inputFocus placeholder="请输入查询..." type="text">
        <i class="iconfont" @click="clickIcon">&#xeef7;</i>
    </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: ""
    };
  },
  created() {
    // console.dir(this.$listeners);
  },
  methods: {
    setFontSize(el, _attrs) {
      if (!_attrs.fontSize) return;
      el.style.fontSize = _attrs.fontSize;
    },
    setColor(el, _attrs) {
      if (!_attrs.color) return;
      el.style.color = _attrs.color;
    },
    setWith(el, _attrs) {
      if (!_attrs.width) return;
      el.style.width = _attrs.width;
    },
    setHeight(el, _attrs) {
      if (!_attrs.height) return;
      el.parentNode.height = _attrs.height;
    },
    setBorderRadius(el, _attrs) {
      if (!_attrs.borderRadius) return;
      el.style.borderRadius = _attrs.borderRadius;
    },
    setPadding(el, _attrs) {
      if (!_attrs.padding) return;
      el.style.padding = _attrs.padding;
    },
    setPlaceholder(el, _attrs) {
      if (!_attrs.placeholder) return;
      el.setAttribute("placeholder", _attrs.placeholder);
    },
    clickIcon() {
      if (!this.$listeners.inputSearch) return;
      this.$emit("inputSearch", this.searchValue);
    }
  },
  directives: {
    setContainerStyle: {
      inserted: async function(el, binding, vnode) {
        vnode.context.$nextTick(function() {
          var _attrs = vnode.context.$attrs;
          //   vnode.context.setFontSize(el, _attrs);
          //   vnode.context.setColor(el, _attrs);
          vnode.context.setWith(el, _attrs);
          vnode.context.setHeight(el, _attrs);
          vnode.context.setBorderRadius(el, _attrs);
          vnode.context.setPadding(el, _attrs);
          //   vnode.context.setPlaceholder(el, _attrs);
        });
      }
    },
    setInputStyle: {
      inserted: async function(el, binding, vnode) {}
    },

    inputFocus: {
      inserted: async function(el, binding, vnode) {
        await vnode.context.$nextTick(function() {
          el.onfocus = function() {
            el.parentNode.style.borderColor = "rgb(64, 158, 255)";
          };
          el.onblur = function() {
            el.parentNode.style.borderColor = "#dcdfe6";
          };
        });
      }
    }
  }
};
</script>
<style scoped>
.sanInputSearch {
  width: 200px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5px;
}
.sanInputSearch input {
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border: none;
  box-sizing: border-box;
  color: #606266;
  outline: none;
  padding: 0 15px;
}
.sanInputSearch input::placeholder {
  color: #ccc;
}
.sanInputSearch i {
  font-size: 22px;
  cursor: pointer;
}
</style>

