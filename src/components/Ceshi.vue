<template>
  <section class="ceshi">
    <paginate :page-count="currentTotal" v-model="currentPage" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'上一页'" :next-text="'下一页'" :prev-class="'prev-item'" :prev-link-class="'prev-link-item'" :next-class="'next-item'" :next-link-class="'next-link-item'" :container-class="'pagination'" :page-class="'page-item'" :page-link-class="'page-link-item'" :active-class="'active-item'" :disabled-class="'disabled-item'">
    </paginate>
    
  </section>
</template>
<script>
import Paginate from "vuejs-paginate";
export default {
  data() {
    return {
      currentTotal: 100,
      currentPage: 2
    };
  },
  components: {
    // VuePaginateAl
    Paginate
  },
  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
    }
  }
};
</script>
<style>
.ceshi {
  height: 100%;
  float: right;
  padding: 0 26px;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-top: 4px solid #2666e9;
}
.ceshi .pagination {
  margin-top: 10px;
  display: inline-block;
  height: 40px;
  font-size: 18px;
}
.ceshi .page-item {
  float: left;
  display: inline-block;
  width: 60px;
  height: 40px;
  line-height: 40px;
}

.ceshi .page-link-item {
  height: 100%;
  display: inline-block;
  width: 100%;
  text-align: center;
  border: 1px solid #ddd;
  border-right: none;
}

.ceshi .prev-item {
  display: inline-block;
  float: left;
  height: 40px;
  line-height: 40px;
}
.ceshi .prev-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #ddd;
  border-right: none;
}
.ceshi .next-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
.ceshi .next-link-item {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border: 1px solid #ddd;
}
.ceshi .active-item {
  /* color: #337ab7; */
}
.ceshi .active-item > .page-link-item {
  color: #337ab7;
}
.ceshi .disabled-item {
  cursor: not-allowed;
}
.ceshi .disabled-item > .prev-link-item {
  color: #ddd;
  cursor: not-allowed;
}
.ceshi .disabled-item > .next-link-item {
  color: #ddd;
  cursor: not-allowed;
}
</style>

