<template>
  <section class="homePage">
    <div class="search">
      <san-button type="default">默认按钮</san-button>
      <san-button type="view">默认按钮</san-button>
      <san-button type="update">默认按钮</san-button>
      <san-button type="delete" hight="40px" fontSize="9px" color="#fff" width="200px" borderRadius="10px">默认按钮</san-button>
      <san-input width="160px" height="40px" padding="0px 20px" color="red" borderRadius="5px" fontSize="12px" placeholder="查询输入..."></san-input>
      <san-input-search @inputSearch="InputSearchWord"></san-input-search>
    </div>

    <san-table></san-table>
  </section>
</template>

<script>
import SanTable from "@/components/Common/SanTable";
import SanButton from "@/components/Common/ButtonComponents/SanButton";
import SanInput from "@/components/Common/SanInput";
import SanInputSearch from "@/components/Common/SanInputSearch";
// import SanButton from "@/components/Common/SanButton";
// import {dataFormat} from "qx_data_format"
export default {
  data() {
    return {
      // border: ""
    };
  },
  created() {
    // console.log(dataFormat)
  },
  methods:{
    InputSearchWord(value){
      console.log("..........")
    }
  },
  components: {
    SanTable,
    SanButton,
    SanInput,
    SanInputSearch
  }
};
</script>

<style scoped>
.homePage {
  height: 100%;
  padding: 0 26px;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-top: 4px solid #2666e9;
}
.search {
  display: flex;
  align-items: center;
  padding: 20px;
}
</style>
