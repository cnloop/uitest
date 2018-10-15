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
  height: 50px;
  line-height: 50px;
  color: rgba(255, 255, 255, 0.6);
}

.headerUserInfo .left i {
  font-size: 18px;
}

.headerUserInfo .right {
  padding-left: 25px;
}
.headerUserInfo .right img {
  padding-right: 12px;
  vertical-align: middle;
  padding-bottom: 6px;
}
.headerUserInfo .right span:last-child i {
  font-size: 12px;
  padding-left: 5px;
}
</style>

