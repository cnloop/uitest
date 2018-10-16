<template>
    <section class="technicalTable">
        <table>
            <thead>
                <tr>
                    <th>参数说明</th>
                    <th>规格与型号</th>
                    <th>数量</th>
                    <th>单位</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>定子额定电流</td>
                    <td>247(92)</td>
                    <td>247(92)</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>定子额定电流</td>
                    <td>247(92)</td>
                    <td>247(92)</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>定子额定电流</td>
                    <td>247(92)</td>
                    <td>247(92)</td>
                    <td>A</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script>
export default {};
</script>
<style scoped>
.technicalTable {
  width: 100%;
  /* margin-top: 50px; */
}
.technicalTable table {
  width: 100%;
  white-space: nowrap;
}
.technicalTable thead {
  border-bottom: 2px solid #ddd;
}
.technicalTable th {
  font-size: 18px;
  color: #6e6e6e;
  font-weight: 600;
  padding: 16px 10px;
}
.technicalTable th:first-child {
  text-align: left;
}

.technicalTable td {
  text-align: center;
  padding: 14px 10px;
  font-size: 15px;
  color: #555;
}
.technicalTable td:first-child {
  text-align: left;
}

.technicalTable tbody tr {
  border-bottom: 1px solid #ddd;
}
</style>
