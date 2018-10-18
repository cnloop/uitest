<template>
  <section class="machine">
    <div class="left">
      <san-list></san-list>
    </div>
    <div class="right">
      <div class="top">
        <table>
          <tr>
            <td class="navItem">
              <span class="desc">按入库时间:</span>
              <date-picker v-model="timeStart" width="220" placeholder="开始时间"></date-picker>
              <span class="desc">至</span>
              <date-picker v-model="timeEnd" width="220" placeholder="结束时间"></date-picker>
            </td>
            <td class="navItem">
              <span class="desc">是否关键设备:</span>
              <san-radio v-model="isKeyEquipment" label="1"></san-radio>
              <span class="descSelect">是</span>
              <san-radio v-model="isKeyEquipment" label="2"></san-radio>
              <span class="descSelect">否</span>
            </td>
            <td class="navItem">
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
      <div class="wrap clearfix" v-if="tableList">
        <div class="itemList">

          <san-machine-info :tableListItem="tableListItem" v-for="(tableListItem,index) in tableList" :key="tableListItem.deId" @click.native="selectItem(index)" :class="{item:true,selected:index===seletedNum}"></san-machine-info>
        </div>
        <div class="info">
          <san-machine-info-exp></san-machine-info-exp>
        </div>
      </div>
      <div class="bottom">
        <paginate :page-count="currentTotal" v-model="currentPage" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一页'" :prev-class="'prev-item'" :prev-link-class="'prev-link-item'" :next-class="'next-item'" :next-link-class="'next-link-item'" :container-class="'pagination'" :page-class="'page-item'" :page-link-class="'page-link-item'" :active-class="'active-item'" :disabled-class="'disabled-item'">
        </paginate>
      </div>
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
import Paginate from "vuejs-paginate";
import axios from "axios";

export default {
  data() {
    return {
      seletedNum: 0,
      timeStart: "",
      timeEnd: "",
      isKeyEquipment: "1",
      isScrapped: "1",
      currentTotal: 1,
      currentPage: 1,
      tableList: ""
    };
  },
  created() {
    this.loadList();
  },
  methods: {
    async loadList(pageNum) {
      if (!pageNum) pageNum = 1;
      var result = await axios.get(
        `/RunningManagementPlatform/equ/jbxxSbtzJbxx/list?pageNo=${pageNum}`
      );
      this.currentTotal = this.setCurrentTotal(
        result.data.count,
        result.data.pageSize
      );
      this.currentPage = result.data.pageNo ? result.data.pageNo : 1;
      this.tableList = result.data.list;
    },
    setCurrentTotal(count, pageSize) {
      if (!count) return 1;
      if (!pageSize) return 1;
      return Math.ceil(count / pageSize);
    },
    selectItem(item) {
      return (this.seletedNum = item);
    },
    clickCallback(pageNum) {
      this.loadList(pageNum);
    }
  },
  components: {
    SanList,
    SanMachineInfo,
    SanMachineInfoExp,
    DatePicker,
    SanRadio,
    SanIconButton,
    Paginate
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
  left: 305px;
  position: absolute;
  top: 10px;
  right: 0;
  bottom: 0;
  overflow-y: auto;
}
.machine > .right > .top {
  height: 60px;
}
.machine > .right > .top .navItem {
  padding-left: 20px;
}
.machine > .right > .top .navItem:first-child {
  padding-left: 0px;
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

.machine > .right > .top .mx-calendar {
  width: 100%;
}

.machine > .right > .top .mx-input {
  height: 32px;
  font-size: 15px;
  /* padding-left: 15px; */
}
.machine > .right > .top .mx-input-append {
  width: 36px;
}

.machine > .right > .top .mx-datepicker-popup {
  left: 0px !important;
  width: 120%;
}

.machine > .right > .top .mx-calendar-icon {
  height: 20px;
}

.machine > .right > .top .mx-calendar-header {
  width: 100%;
}

.machine > .right > .top .mx-calendar-content {
  width: 100%;
}

.machine > .right > .top .mx-calendar {
  /* padding: 6px 0px; */
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
  min-height: 500px;
}

.machine > .right > .wrap > .itemList {
  width: 900px;
  float: left;
}

.machine > .right > .wrap > .info {
  position: absolute;
  height: 100%;
  left: 898px;
  right: 0;
  top: 0;
  border: 1px solid #1dd2e4;
  background-color: #fff;
  box-sizing: border-box;
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

.machine > .right > .bottom {
  height: 70px;
  margin-top: 10px;
  position: relative;
}

.machine .pagination {
  position: absolute;
  right: 1px;
  bottom: 5px;
  display: inline-block;
  height: 40px;
  font-size: 18px;
}
.machine .page-item {
  float: left;
  display: inline-block;
  width: 60px;
  height: 40px;
  line-height: 40px;
}

.machine .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #ddd;
  border-right: none;
}

.machine .prev-item {
  display: inline-block;
  float: left;
  height: 40px;
  line-height: 40px;
}
.machine .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #ddd;
  border-right: none;
}
.machine .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.machine .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #ddd;
}
.machine .active-item {
  /* color: #337ab7; */
}
.machine .active-item > .page-link-item {
  color: #337ab7;
}
.machine .disabled-item {
  cursor: not-allowed;
}
.machine .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.machine .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>

