<template>
  <section class="show">
    <h1>show</h1>
    <button @click="isShowMsg=!isShowMsg">显示</button>
    <san-message-box :isShowMeaasgeBox.sync="isShowMsg" @callbackFn="deleteItem">
      您真的需要删除吗？
    </san-message-box>
    <san-checkbox iconFontSize="20px" value="tom1" v-model="checkName"></san-checkbox>
    <san-checkbox value="tom2" v-model="checkName"></san-checkbox>
    <button @click="isShoAlert">显示Alert</button>
    <san-alert type="warning" :isAlertShow.sync="isAlertShow" height="50px">
      <i class="iconfont" slot="iconfont">&#xe617;</i>
      这是一个alert组件</san-alert>
  </section>
</template>
<script>
import SanMessageBox from "@/components/Common/SanMessageBox";
import SanCheckbox from "@/components/Common/SanCheckbox";
import SanAlert from "@/components/Common/SanAlert";
export default {
  data() {
    return {
      isShowMsg: false,
      checkName: [],
      isAlertShow: false
    };
  },
  methods: {
    deleteItem(result) {
      alert(result);
    },
    isShoAlert() {
      this.isAlertShow = true;
    }
  },
  components: {
    SanMessageBox,
    SanCheckbox,
    SanAlert
  },
  watch: {
    checkName: {
      handler: function(val) {
        console.dir(val);
      },
      immediate: true,
      deep: true
    }
  }
};
</script>
<style scoped>
.show {
  width: 100%;
  height: 100%;
}
</style>

