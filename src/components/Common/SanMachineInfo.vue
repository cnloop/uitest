<template>
  <section class="sanMachineInfo">
    <div class="left" ref="equipmentImg">
      <img :src="loadImg(tableListItem)" alt="">
    </div>
    <div class="center">
      <div class="wrap">
        <h4 class="top">设备详情</h4>
        <table class="bottom">
          <tr>
            <td class="itemTitle">设备名称</td>
            <td class="itemContent">{{equipmentName}}</td>
            <td class="itemTitle">生产厂家</td>
            <td class="itemContent">{{Manufacturer}}</td>
          </tr>
          <tr>
            <td class="itemTitle">设备编号</td>
            <td class="itemContent">{{equipmentNumber}}</td>
            <td class="itemTitle">安装日期</td>
            <td class="itemContent">{{InstallationTime}}</td>
          </tr>
          <tr>
            <td class="itemTitle">规格型号</td>
            <td class="itemContent"></td>
            <td class="itemTitle">入库时间</td>
            <td class="itemContent">{{StorageTime}}</td>
          </tr>
        </table>
      </div>

    </div>
    <div class="right">
      <div class="wrap">
        <san-button type="update" width="70px" borderRadius="3px" height="34px" fontSize="16px">出库</san-button>
        <san-button class="btn" type="view" width="80px" borderRadius="3px" height="34px" fontSize="16px">取消报废</san-button>
      </div>

    </div>
    <span class="lable">{{equipmentName}}</span>
  </section>
</template>
<script>
import SanButton from "@/components/Common/ButtonComponents/SanButton";
export default {
  props: ["tableListItem"],
  data() {
    return {
      equipmentName: "", //设备名称
      Manufacturer: "", //生产厂家
      equipmentNumber: "", //设备编号
      InstallationTime: "", //安装日期
      SpecificationModel: "", //规则型号
      StorageTime: "", //入库时间
      equipmentImg: "" // 设备图片
    };
  },
  created() {
    this.loadData(this.tableListItem);
  },
  methods: {
    loadData(tableListItem) {
      this.equipmentName = tableListItem.deName;
      this.Manufacturer = tableListItem.supplier;
      this.equipmentNumber = tableListItem.deId;
      this.InstallationTime = tableListItem.aztime;
      this.StorageTime = tableListItem.updateDate;
      // this.equipmentImg=tableListItem.picture;
    },
    loadImg(tableListItem) {
      if (!tableListItem.picture) return `${require('@/assets/Bimg_01.png')}`;
      return tableListItem.picture;
    }
  },
  components: {
    SanButton
  }
};
</script>
<style scoped>
.sanMachineInfo {
  width: 900px;
  height: 160px;
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.sanMachineInfo .left {
  width: 180px;
  line-height: 160px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  /* background: url("../../assets/供水泵.jpg") center center; */
  /* background-size: 160px 100px;
  background-repeat: no-repeat; */
}
.sanMachineInfo .left img {
  width: 163px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.sanMachineInfo .center {
  position: absolute;
  left: 180px;
  right: 200px;
  top: 0;
  bottom: 0;
  cursor: pointer;
}
.sanMachineInfo .center .wrap {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 0px 10px;
}

.sanMachineInfo .center .top {
  font-size: 16px;
}
.sanMachineInfo .center .bottom {
  margin-top: 18px;
  font-size: 15px;
  white-space: nowrap;
}
.sanMachineInfo .center .bottom tr:hover {
  background-color: rgb(238, 243, 253);
}
.sanMachineInfo .center .bottom .itemTitle {
  text-align: right;
  padding: 5px 14px;
}
.sanMachineInfo .center .bottom .itemContent {
  text-align: left;
  padding: 5px 0px;
  min-width: 160px;
}
.sanMachineInfo .right {
  width: 200px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}
.sanMachineInfo .right .wrap {
  position: absolute;
  bottom: 22px;
  right: 20px;
}
.sanMachineInfo .right .wrap .btn {
  margin-left: 10px;
}
.sanMachineInfo .lable {
  padding: 5px 12px;
  position: absolute;
  top: 1px;
  left: 1px;
  background-color: #d2f6fa;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
</style>

