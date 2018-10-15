<template>
    <section class="sanMachineInfo">
        <div class="left">

        </div>
        <div class="center">
            <div class="wrap">
                <h4 class="top">设备详情</h4>
                <table class="bottom">
                    <tr>
                        <td class="itemTitle">设备名称</td>
                        <td class="itemContent">1#主水泵</td>
                        <td class="itemTitle">生产厂家</td>
                        <td class="itemContent">银川起重厂</td>
                    </tr>
                    <tr>
                        <td class="itemTitle">设备编号</td>
                        <td class="itemContent">96542</td>
                        <td class="itemTitle">出厂日期</td>
                        <td class="itemContent">2017-06-23</td>
                    </tr>
                    <tr>
                        <td class="itemTitle">规格型号</td>
                        <td class="itemContent">LD-A</td>
                        <td class="itemTitle">入库时间</td>
                        <td class="itemContent">2017-08-23</td>
                    </tr>
                </table>
            </div>

        </div>
        <div class="right">
            <div class="wrap">
                <san-button type="update" width="60px" borderRadius="3px" height="30px" fontSize="15px">出库</san-button>
                <san-button class="btn" type="view" width="70px" borderRadius="3px" height="30px" fontSize="15px">取消报废</san-button>
            </div>

        </div>
        <span class="lable">主水泵1</span>
    </section>
</template>
<script>
import SanButton from "@/components/Common/ButtonComponents/SanButton";
export default {
  components: {
    SanButton
  }
};
</script>
<style scoped>
.sanMachineInfo {
  width: 800px;
  height: 160px;
  position: relative;
  background-color: #fff;
  border: 1px solid #1dd2e4;
  border-right-color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.sanMachineInfo .left {
  width: 180px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: url("../../assets/供水泵.jpg") center center;
  background-size: 160px 100px;
  background-repeat: no-repeat;
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
  padding: 5px 25px;
}
.sanMachineInfo .center .bottom .itemContent {
  text-align: left;
  padding: 5px 10px;
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

