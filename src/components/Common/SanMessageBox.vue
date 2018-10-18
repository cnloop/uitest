<template>
  <section class="sanMessageBox" v-show="isShowMeaasgeBox">
    <div class="sanMessageBox-container">
      <div class="sanMessageBox-header">
        <span>提示</span>
        <i @click.stop="clickMsgBox('cancel')" class="iconfont">&#xe622;</i>
      </div>
      <div class="sanMessageBox-center">
        <slot></slot>
      </div>
      <div class="sanMessageBox-bottom">
        <span @click.stop="clickMsgBox('confirm')">确定</span>
        <span @click.stop="clickMsgBox('cancel')">取消</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["isShowMeaasgeBox"],
  methods: {
    clickMsgBox(result) {
      this.$emit("callbackFn", result);
      this.$emit("update:isShowMeaasgeBox", !this.isShowMeaasgeBox);
    }
  }
};
</script>
<style scoped>
.sanMessageBox {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.sanMessageBox-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 500px;
  min-height: 180px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.sanMessageBox-header {
  color: #303133;
  height: 32px;
  line-height: 1;
  position: relative;
}
.sanMessageBox-header > span {
  font-size: 18px;
  font-weight: 600;
}

.sanMessageBox-header > i {
  cursor: pointer;
  float: right;
  font-size: 20px;
}
.sanMessageBox-header > i:hover {
  color: #409eff;
}

.sanMessageBox-center {
  color: #606266;
  font-size: 16px;
  margin-top: 30px;
}
.sanMessageBox-bottom {
  margin-top: 40px;
  /* margin-bottom: 5px; */
}
.sanMessageBox-bottom span {
  float: right;
  cursor: pointer;
  color: #fff;
  padding: 5px 10px;
  border-radius: 2px;
  font-size: 16px;
  border: 1px solid #409eff;
  background-color: #409eff;
}
.sanMessageBox-bottom span:last-child {
  color: #606266;
  margin-right: 15px;
  border: 1px solid #dcdfe6;
  background-color: #ecf5ff;
}
</style>
