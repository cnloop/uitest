<template>
    <section class="headerUserInfo">
        <div class="left">
            <span>
                <i class="iconfont">&#xe671;</i>
            </span>
            <span>
                版本信息
            </span>
        </div>
        <div class="right">
            <!-- <span class="img">
                <i class="iconfont">&#xe621;</i>
            </span> -->
            <span class="img">
                <img src="../../assets/admin_icon.png" alt="">
            </span>
            <span>欢迎您，张爱华</span>
            <span>
                <i class="iconfont">&#xe600;</i>
            </span>
        </div>

    </section>
</template>
<script>
export default {};
</script>
<style scoped>
.headerUserInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
}
.headerUserInfo .left {
  padding-right: 15px;
}
.headerUserInfo .left i {
  font-size: 18px;
}

.headerUserInfo .right {
  display: flex;
  align-items: center;
}
.headerUserInfo .right img {
  padding-right: 12px;
}
.headerUserInfo .right span:last-child i {
  font-size: 12px;
  padding-left: 10px;
}
</style>

