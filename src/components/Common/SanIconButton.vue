<template>
  <section v-setCustomStyle class="sanIconButton">
    <span ref="iconSpan">
      <slot name="iconfont"></slot>
    </span>
    <span>
      <slot></slot>
    </span>
  </section>
</template>
<script>
export default {
  methods: {
    setWith(el, _attrs) {
      if (!_attrs.width) return;
      el.style.width = _attrs.width;
    },
    setHeight(el, _attrs) {
      if (!_attrs.height) return;
      el.style.height = _attrs.height;
      el.style.lineHeight = _attrs.height;
    },
    setFontSize(el, _attrs) {
      if (!_attrs.fontSize) return;
      el.style.fontSize = _attrs.fontSize;
      this.$refs.iconSpan.childNodes[0].style.fontSize = _attrs.fontSize;
    },
    setBorder(el, _attrs) {
      if (!_attrs.border) return;
      el.style.border = _attrs.border;
    },
    setBackgroundColor(el, _attrs) {
      if (!_attrs.backgroundColor) return;
      el.style.backgroundColor = _attrs.backgroundColor;
    },
    setBackgroundColorHover(el, _attrs) {
      if (!_attrs.backgroundColorHover) return;
      el.onmouseover = function() {
        el.style.backgroundColor = `${_attrs.backgroundColorHover}`;
        console.log(el.style.backgroundColor);
      };
      el.onmouseout = function() {
        el.style.backgroundColor = _attrs.backgroundColor
          ? _attrs.backgroundColor
          : "#460dff";
      };
    },
    setBorderRadius(el, _attrs) {
      if (!_attrs.borderRadius) return;
      el.style.borderRadius = _attrs.borderRadius;
    }
  },
  directives: {
    setCustomStyle: {
      inserted: async function(el, binding, vnode) {
        await vnode.context.$nextTick(function() {
          var _attrs = vnode.context.$attrs;
          vnode.context.setWith(el, _attrs);
          vnode.context.setHeight(el, _attrs);
          vnode.context.setFontSize(el, _attrs);
          vnode.context.setBorder(el, _attrs);
          vnode.context.setBackgroundColor(el, _attrs);
          vnode.context.setBackgroundColorHover(el, _attrs);
          vnode.context.setBorderRadius(el, _attrs);
        });
      }
    }
  }
};
</script>
<style scoped>
.sanIconButton {
  display: inline-block;
  width: 80px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  background-color: #2666e8;
  position: relative;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
}
.sanIconButton:hover {
  background-color: #3a8ee6;
}
.sanIconButton > span:first-child {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translate(0, -50%);
}
/* .sanIconButton > i {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translate(0, -50%);
} */
.sanIconButton > span:last-child {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate(0, -50%);
}
</style>

