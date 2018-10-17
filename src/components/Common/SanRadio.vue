<template>
  <span class="sanRadio">
    <span class="sanRadio_inner" :class="{'sanRadio_inner_changeBgc':$attrs.label===getValue}"></span>
    <input type="radio" value="" @click="changeRadio">
  </span>
</template>
<script>
export default {
  model: {
    prop: "getValue",
    event: "changeRadio"
  },
  props: ["getValue"],
  methods: {
    changeRadio() {
      if (!this.$attrs.label) return;
      this.$emit("changeRadio", this.$attrs.label);
    }
  }
};
</script>
<style scoped>
.sanRadio {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 20px;
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-top: -6px;
}
.sanRadio > .sanRadio_inner {
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
}
.sanRadio > .sanRadio_inner_changeBgc {
  background-color: #409eff;
  background: #409eff;
}
.sanRadio > .sanRadio_inner:after {
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: #fff;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-in;
}
.sanRadio > .sanRadio_inner:hover {
  border-color: #409eff;
}
.sanRadio > input {
  cursor: pointer;
  opacity: 0;
  outline: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>

