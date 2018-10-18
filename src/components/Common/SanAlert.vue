<template>
    <section v-setCustomStyle class="sanAlert" v-show="isAlertShow">
        <span ref="icon">
            <slot name="iconfont">&#xe604;</slot>
        </span>
        <span ref="text">
            <slot></slot>
        </span>
        <i @click="closeAlert" class="iconfont">&#xe622;</i>
    </section>
</template>
<script>
export default {
  props: ["isAlertShow"],
  data() {
    return {};
  },
  methods: {
    setBaseStyle(el, _attrs) {
      if (_attrs.type === "success" || !_attrs.type) {
        el.style.backgroundColor = "#f0f9eb";
        this.$refs.icon.style.color = "#67c23a";
        this.$refs.text.style.color = "#67c23a";
      } else if (_attrs.type === "warning") {
        el.style.backgroundColor = "#fdf6ec";
        this.$refs.icon.childNodes[0].style.color = "#e6a23c";
        this.$refs.text.style.color = "#e6a23c";
      } else if (_attrs.type === "error") {
        el.style.backgroundColor = "#fef0f0";
        this.$refs.icon.childNodes[0].style.color = "#f56c6c";
        this.$refs.text.style.color = "#f56c6c";
      }
    },
    setWith(el, _attrs) {
      if (!_attrs.width) return;
      el.style.width = _attrs.width;
    },
    setHeight(el, _attrs) {
      if (!_attrs.height) return;
      el.style.height = _attrs.height;
      el.style.lineHeight = _attrs.height;
    },
    setTextFontSize(el, _attrs) {
      if (!_attrs.fontSize) return;
      el.style.fontSize = _attrs.textFontSize;
    },
    setBackgroundColor(el, _attrs) {
      if (!_attrs.backgroundColor) return;
      el.style.backgroundColor = _attrs.backgroundColor;
    },
    setBorderRadius(el, _attrs) {
      if (!_attrs.borderRadius) return;
      el.style.borderRadius = _attrs.borderRadius;
    },
    closeAlert() {
      this.$emit("update:isAlertShow", !this.isAlertShow);
    }
  },
  directives: {
    setCustomStyle: {
      inserted: async function(el, binding, vnode) {
        await vnode.context.$nextTick(function() {
          var _attrs = vnode.context.$attrs;
          vnode.context.setBaseStyle(el, _attrs);
          vnode.context.setWith(el, _attrs);
          vnode.context.setHeight(el, _attrs);
          vnode.context.setTextFontSize(el, _attrs);
          vnode.context.setBackgroundColor(el, _attrs);
          vnode.context.setBorderRadius(el, _attrs);
        });
      }
    }
  }
};
</script>
<style scoped>
.sanAlert {
  width: 500px;
  height: 32px;
  line-height: 28px;
  background-color: #f0f9eb;
  border-radius: 3px;
  padding: 2px 10px;
  box-sizing: border-box;
}
.sanAlert > span:nth-child(1) > i {
  font-size: 22px;
  color: #67c23a;
  display: inline-block;
  transform: translateY(2px);
}
.sanAlert > span:nth-child(2) {
  margin-left: 12px;
  font-size: 18px;
  color: #67c23a;
}
.sanAlert > i {
  float: right;
  color: #c0c4cc;
  cursor: pointer;
}
</style>

