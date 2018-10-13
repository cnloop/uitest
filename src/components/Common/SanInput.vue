<template>
  <section class="sanInput">
    <input v-setCustomStyle type="text" placeholder="请输入...">
  </section>
</template>
<script>
export default {
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
    }
  },
  directives: {
    setCustomStyle: {
      inserted: async function(el, binding, vnode) {
        vnode.context.$nextTick(function() {
          var _attrs = vnode.context.$attrs;
          vnode.context.setFontSize(el, _attrs);
          vnode.context.setColor(el, _attrs);
          vnode.context.setWith(el, _attrs);
          vnode.context.setHeight(el, _attrs);
          vnode.context.setBorderRadius(el, _attrs);
          vnode.context.setPadding(el, _attrs);
          vnode.context.setPlaceholder(el, _attrs);
        });
      }
    }
  }
};
</script>
<style scoped>
.sanInput {
  height: 40px;
  display: inline-flex;
}
.sanInput input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  height: 100%;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.sanInput input::placeholder {
  color: #ccc;
}
/* .sanInput::-webkit-input-placeholder { */
/* WebKit, Blink, Edge */
/* color: #ccc; */
/* } */
/* .sanInput:-moz-placeholder { */
/* Mozilla Firefox 4 to 18 */
/* color: #ccc; */
/* } */
/* .sanInput::-moz-placeholder { */
/* Mozilla Firefox 19+ */
/* color: #ccc; */
/* } */
/* :-ms-input-placeholder { */
/* Internet Explorer 10-11 */
/* color: #ccc; */
/* } */
.sanInput input:focus {
  border: 1px solid rgb(64, 158, 255);
}
</style>
