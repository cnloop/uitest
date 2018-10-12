<template>
    <section class="navBar">
        <ul>
            <li>
                <span>
                    <i class="iconfont">&#xe621;</i>
                </span>
                <span>总体概况</span>
            </li>
            <li>
                <span>
                    <i class="iconfont">&#xe621;</i>
                </span>
                <span>总体概况</span>
            </li>
            <li>
                <span>
                    <i class="iconfont">&#xe621;</i>
                </span>
                <span>总体概况</span>
            </li>
            <li>
                <span>
                    <i class="iconfont">&#xe621;</i>
                </span>
                <span>总体概况</span>
            </li>
            <li>
                <span>
                    <i class="iconfont">&#xe621;</i>
                </span>
                <span>总体概况</span>
            </li>
            <li>
                <span>
                    <i class="iconfont">&#xe621;</i>
                </span>
                <span>总体概况</span>
            </li>
            <li>
                <span>
                    <i class="iconfont">&#xe621;</i>
                </span>
                <span>总体概况</span>
            </li>
        </ul>
    </section>
</template>
<script>
export default {};
</script>
<style scoped>
.navBar ul {
  display: flex;
  color: #c2ffff;
  font-size: 20px;
}
.navBar li {
  display: flex;
  background-color: #0b1831;
  justify-content: center;
  align-items: center;
  padding: 15px 22px;
  border-top: 1px solid #273551;
  border-right: 1px solid #273551;
  cursor: pointer;
}

.navBar li:first-child {
  border-left: 1px solid #273551;
}

.navBar li:hover {
  background-color: rgb(24, 110, 132);
}

.navBar li span:nth-child(1) {
  display: flex;
}
.navBar i {
  /* margin-top: 5px; */
  font-size: 22px;
  padding-right: 10px;
}
</style>

