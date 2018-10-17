<template>
  <section class="machine">
    <div class="left">
      <san-list></san-list>
    </div>
    <div class="right">
      <div class="top">
        <table>
          <tr>
            <td>
              <span class="desc">按入库时间:</span>
              <date-picker v-model="timeStart" width="220" placeholder="开始时间"></date-picker>
              <span class="desc">至</span>
              <date-picker v-model="timeEnd" width="220" placeholder="结束时间"></date-picker>
            </td>
            <td>
              <span class="desc">是否关键设备:</span>
              <san-radio v-model="isKeyEquipment" label="1"></san-radio>
              <span class="descSelect">是</span>
              <san-radio v-model="isKeyEquipment" label="2"></san-radio>
              <span class="descSelect">否</span>
            </td>
            <td>
              <span class="desc">是否报废:</span>
              <san-radio v-model="isScrapped" label="1"></san-radio>
              <span class="descSelect">是</span>
              <san-radio v-model="isScrapped" label="2"></san-radio>
              <span class="descSelect">否</span>
            </td>
            <td class="btn">
              <div class="wrap">
                <san-icon-button class="btn1" width="90px" height="32px" fontSize="20px">
                  <i class="iconfont" slot="iconfont">&#xeef7;</i>查看
                </san-icon-button>
                <san-icon-button class="btn2" width="90px" height="32px" fontSize="20px">
                  <i class="iconfont" slot="iconfont">&#xe602;</i>入库
                </san-icon-button>
              </div>
            </td>
          </tr>
        </table>

      </div>
      <div class="wrap clearfix">
        <div class="itemList">
          <san-machine-info @click.native="selectItem(1)" :class="{item:true,selected:1===seletedNum}"></san-machine-info>
          <san-machine-info @click.native="selectItem(2)" :class="{item:true,selected:2===seletedNum}"></san-machine-info>

          <san-machine-info @click.native="selectItem(3)" :class="{item:true,selected:3===seletedNum}"></san-machine-info>
          <san-machine-info @click.native="selectItem(4)" :class="{item:true,selected:4===seletedNum}"></san-machine-info>
        </div>
        <div class="info">
          <san-machine-info-exp></san-machine-info-exp>
        </div>
      </div>
      <div class="bottom"></div>

    </div>
  </section>
</template>
<script>
import SanList from "@/components/Common/SanList";
import SanMachineInfo from "@/components/Common/SanMachineInfo";
import SanMachineInfoExp from "@/components/Common/SanMachineInfoExp";
import SanRadio from "@/components/Common/SanRadio";
import DatePicker from "vue2-datepicker";
import SanIconButton from "@/components/Common/SanIconButton";

export default {
  data() {
    return {
      seletedNum: 1,
      timeStart: "",
      timeEnd: "",
      isKeyEquipment: "1",
      isScrapped: "1"
    };
  },
  methods: {
    selectItem(item) {
      if (!item) return;
      return (this.seletedNum = item);
    }
  },
  components: {
    SanList,
    SanMachineInfo,
    SanMachineInfoExp,
    DatePicker,
    SanRadio,
    SanIconButton
  }
};
</script>
<style>
.machine {
  height: 100%;
  position: relative;
  background-color: rgb(246, 247, 248);
}

.machine > .left {
  width: 280px;
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 0;
  background-color: #fff;
}
.machine > .right {
  left: 290px;
  position: absolute;
  top: 10px;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}
.machine > .right > .top {
  height: 60px;
  line-height: 60px;
  position: relative;
}
.machine > .right > .top td {
  padding-left: 20px;
}
.machine > .right > .top .desc {
  font-size: 16px;
  padding: 0px 8px;
}
.machine > .right > .top .descSelect {
  font-size: 16px;
  padding: 0px 6px;
}
.machine > .right > .top .desc:first-child {
  padding-left: 0px;
}

.machine > .right > .top .mx-input {
  height: 32px;
  font-size: 15px;
  padding-left: 15px;
}
.machine > .right > .top .mx-input-append {
  width: 38px;
}

.machine > .right > .top .mx-datepicker-popup {
  left: 0px!important;
  width: 120%;
}

.machine > .right > .top .mx-calendar-header {
  width: 100%;
}

.machine > .right > .top .mx-calendar-content {
  width: 100%;
}

.machine > .right > .top .mx-calendar {
  padding: 6px 0px;
}

.machine > .right > .top .btn > .wrap {
  width: 200px;
  height: 40px;
  position: relative;
  margin-left: 10px;
}

.machine > .right > .top .btn > .wrap > .btn1 {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
}
.machine > .right > .top .btn > .wrap > .btn2 {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
}

.machine > .right > .wrap {
  position: relative;
  width: 100%;
}

.machine > .right > .wrap > .itemList {
  width: 800px;
  float: left;
}

.machine > .right > .wrap > .info {
  position: absolute;
  height: 100%;
  left: 798px;
  right: 0;
  top: 0;
  border: 1px solid #1dd2e4;
  background-color: #fff;
  box-sizing: border-box;
}
.machine > .right > .bottom {
  background-color: black;
  height: 30px;
  margin-top: 10px;
}

.machine .item {
  margin-top: 25px;
}
.machine .item:first-child {
  margin-top: 0px;
}
.machine .selected {
  border: 1px solid #1dd2e4;
  border-right-color: #fff;
  z-index: 99;
}
</style>

