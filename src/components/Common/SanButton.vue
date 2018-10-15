<template>
  <section v-setCustomStyle class="sanButton">
    <slot></slot>
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
    },
    setFontSize(el, _attrs) {
      if (!_attrs.fontSize) return;
      el.style.fontSize = _attrs.fontSize;
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
.sanButton {
  width: 100px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  display: block;
  text-align: center;
  line-height: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #2666e8;
}
.sanButton:hover {
  border-color: #3a8ee6;
  background-color: yellow;
}
</style>

