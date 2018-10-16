<template>
    <section class="sanMachineInfoExp">
        <div class="top">
            <top-nav @selectShowItem="selectShowItem"></top-nav>
        </div>
        <div class="bottom">
            <component :is="currentComponent"></component>
        </div>
    </section>
</template>
<script>
import TopNav from "@/components/Common/SanMachineInfoExp/TopNav";
import BaseTable from "@/components/Common/SanMachineInfoExp/BaseTable";
import TechnicalTable from "@/components/Common/SanMachineInfoExp/TechnicalTable";
import RepairTable from "@/components/Common/SanMachineInfoExp/RepairTable";
import MaintenanceTable from "@/components/Common/SanMachineInfoExp/MaintenanceTable";
import ProblemTable from "@/components/Common/SanMachineInfoExp/ProblemTable";

export default {
  data() {
    return {
      showInfo: "technical",
      currentComponent: "base-table"
    };
  },
  methods: {
    selectShowItem(info) {
      if (!info) return (this.currentComponent = "base-table");
      return (this.currentComponent = `${info}-table`);
    }
  },
  components: {
    TopNav,
    BaseTable,
    TechnicalTable,
    RepairTable,
    MaintenanceTable,
    ProblemTable
  }
};
</script>

<style scoped>
.sanMachineInfoExp {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  overflow: auto;
  box-sizing: border-box;
}
.sanMachineInfoExp .bottom {
  margin-top: 30px;
}
</style>

