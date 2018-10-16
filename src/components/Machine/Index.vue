<template>
  <section class="machine">
    <div class="left">
      <san-list></san-list>
    </div>
    <div class="right">
      <div class="wrap">
        <div class="itemList">
          <san-machine-info @selectItem="selectItem" class="item"></san-machine-info>
          <san-machine-info class="item"></san-machine-info>

          <san-machine-info class="item"></san-machine-info>
          <san-machine-info class="item"></san-machine-info>

        </div>
        <div class="info">
          <san-machine-info-exp></san-machine-info-exp>
        </div>
      </div>

    </div>
  </section>
</template>
<script>
import SanList from "@/components/Common/SanList";
import SanMachineInfo from "@/components/Common/SanMachineInfo";
import SanMachineInfoExp from "@/components/Common/SanMachineInfoExp";
export default {
  methods: {
    selectItem(item) {}
  },
  components: {
    SanList,
    SanMachineInfo,
    SanMachineInfoExp
  }
};
</script>
<style scoped>
.machine {
  height: 100%;
  position: relative;
  background-color: rgb(246, 247, 248);
}

.machine .left {
  width: 280px;
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 0;
  background-color: #fff;
}
.machine .right {
  left: 290px;
  position: absolute;
  top: 10px;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}

.machine .right .wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.machine .right .wrap .itemList {
  /* position: absolute; */
  width: 800px;
  float: left;
  /* left: 0; */
  /* top: 0; */
  /* bottom: 0; */
}

.machine .right .info {
  position: absolute;
  /* float: right; */
  height: 100%;
  left: 801px;
  right: 0;
  top: 0;
  border: 1px solid #1dd2e4;
  background-color: #fff;
  box-sizing: border-box;
}
.item {
  margin-top: 25px;
}
.item:first-child {
  margin-top: 0px;
  z-index: 99;
}
</style>

