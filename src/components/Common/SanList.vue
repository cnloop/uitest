<template>
    <section class="sanList">
        <div class="title">
            <span>设备类型</span>
            <i class="iconfont">&#xe601;</i>
        </div>
        <ul class="info">
            <li>
                <span>主电机</span>
            </li>
            <li>
                <span>主电机</span>
            </li>
            <li>
                <span>主电机</span>
            </li>
            <li>
                <span>主电机</span>
            </li>
            <li>
                <span>主电机</span>
            </li>
        </ul>
    </section>
</template>
<script>
export default {};
</script>
<style scoped>
.sanList {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.sanList .title {
  height: 46px;
  line-height: 46px;
  background-color: #2666e8;
  padding-left: 40px;
  padding-right: 20px;
  cursor: pointer;
  color: #fff;
  box-sizing: border-box;
}

.sanList .title span {
  font-size: 18px;
}

.sanList .title i {
  float: right;
}

.sanList .info li {
  height: 42px;
  line-height: 40px;
  cursor: pointer;
  padding-left: 40px;
  font-size: 17px;
}
.sanList .info li span {
  text-decoration: #2666e8;
}
.sanList .info li:hover {
  background-color: #ccc;
}
</style>
