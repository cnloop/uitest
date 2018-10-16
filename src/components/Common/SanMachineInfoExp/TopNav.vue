<template>
    <section class="topNav">
        <table>
            <tr>
                <td @click="clickItem('base')" :class="{isSelected:seletedItem==='base'}">基础信息</td>
                <td @click="clickItem('technical')" :class="{isSelected:seletedItem==='technical'}">技术信息</td>
                <td @click="clickItem('repair')" :class="{isSelected:seletedItem==='repair'}">维护记录</td>
                <td @click="clickItem('maintenance')" :class="{isSelected:seletedItem==='maintenance'}">养护记录</td>
                <td @click="clickItem('problem')" :class="{isSelected:seletedItem==='problem'}">问题上报</td>
            </tr>
        </table>
    </section>
</template>
<script>
export default {
  data() {
    return {
      seletedItem: 1
    };
  },
  methods: {
    clickItem(info) {
      if (!info) return (this.seletedItem = "base");
      this.seletedItem = info;
      if (!this.$listeners.selectShowItem) return;
      this.$emit("selectShowItem", info);
    }
  }
};
</script>
<style scoped>
.topNav {
  box-sizing: border-box;
}
.topNav table {
  margin: 0 auto;
  width: 100%;
  font-size: 18px;
  white-space: nowrap;
}
.topNav tr {
  border-bottom: 1px solid #ddd;
}
.topNav td {
  padding: 20px 10px;
  font-weight: 600;
  cursor: pointer;
  color: #6e6e6e;
  box-sizing: border-box;
}
.topNav td:hover {
  color: rgba(255, 159, 0, 0.8);
  /* border-bottom: 3px solid rgba(255, 159, 0, 0.8); */
}
.topNav .isSelected {
  border-bottom: 3px solid rgba(255, 159, 0, 0.8);
}
</style>

