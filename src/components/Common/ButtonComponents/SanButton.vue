<template>
  <span v-setCustomStyle class="sanButton">
    <slot></slot>
  </span>
</template>
<script>
export default {
  methods: {
    setBaseStyle(el, _attrs) {
      if (_attrs.type === "default" || !_attrs.type) {
        el.style.color = "#fff";
        el.style.border = "1px solid #135bec";
        el.style.backgroundColor = "#2666e8";
        el.onmouseover = function() {
          el.style.backgroundColor = "#4683FF";
        };
        el.onmouseleave = function() {
          el.style.backgroundColor = "#2666e8";
        };
      } else if (_attrs.type === "view") {
        el.style.border = "1px solid #a3e0a6";
        el.style.backgroundColor = "#dbefdc";
        el.onmouseover = function() {
          el.style.backgroundColor = "#bee2c0";
        };
        el.onmouseleave = function() {
          el.style.backgroundColor = "#dbefdc";
        };
      } else if (_attrs.type === "update") {
        el.style.border = "1px solid #9fcded";
        el.style.backgroundColor = "#d2ecfe";
        el.onmouseover = function() {
          el.style.backgroundColor = "#add1ea";
        };
        el.onmouseleave = function() {
          el.style.backgroundColor = "#d2ecfe";
        };
      } else if (_attrs.type === "delete") {
        el.style.border = "1px solid #f3c2c0";
        el.style.backgroundColor = "#f5dbdc";
        el.onmouseover = function() {
          el.style.backgroundColor = "#f1bcbe";
        };
        el.onmouseleave = function() {
          el.style.backgroundColor = "#f5dbdc";
        };
      }
    },
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
      el.style.height = _attrs.height;
      el.style.lineHeight = _attrs.height;
    },
    setBorderRadius(el, _attrs) {
      if (!_attrs.borderRadius) return;
      el.style.borderRadius = _attrs.borderRadius;
    }
  },
  directives: {
    setCustomStyle: {
      inserted: async function(el, binding, vnode) {
        vnode.context.$nextTick(function() {
          var _attrs = vnode.context.$attrs;
          vnode.context.setBaseStyle(el, _attrs);
          vnode.context.setFontSize(el, _attrs);
          vnode.context.setColor(el, _attrs);
          vnode.context.setWith(el, _attrs);
          vnode.context.setHeight(el, _attrs);
          vnode.context.setBorderRadius(el, _attrs);
        });
      }
    }
  }
};
</script>
<style scoped>
.sanButton {
  height: 40px;
  color: #333;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  border-radius: 3px;
  font-size: 18px;
  box-sizing: border-box;
}
</style>
