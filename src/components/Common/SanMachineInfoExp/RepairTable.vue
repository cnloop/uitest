<template>
    <section class="repairTable">
        <table>
            <thead>
                <tr>
                    <th>维修类型</th>
                    <th>维修人员</th>
                    <th>维修时间</th>
                    <th>详情</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>小修</td>
                    <td>张可</td>
                    <td>2018-09-14 10:13:20</td>
                    <td><span>查看</span></td>
                </tr>
                <tr>
                    <td>小修</td>
                    <td>张可</td>
                    <td>2018-09-14 10:13:20</td>
                    <td><span>查看</span></td>
                </tr>
                <tr>
                    <td>小修</td>
                    <td>张可</td>
                    <td>2018-09-14 10:13:20</td>
                    <td><span>查看</span></td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script>
export default {};
</script>
<style scoped>
.repairTable {
  width: 100%;
}
.repairTable table {
  width: 100%;
  white-space: nowrap;
}
.repairTable thead {
  border-bottom: 2px solid #ddd;
}
.repairTable th {
  font-size: 18px;
  color: #6e6e6e;
  font-weight: 600;
  padding: 16px 10px;
}
.repairTable th:first-child {
  text-align: left;
}

.repairTable td {
  text-align: center;
  padding: 14px 10px;
  font-size: 15px;
  color: #555;
}
.repairTable td:first-child {
  text-align: left;
}

.repairTable tbody tr {
  border-bottom: 1px solid #ddd;
}
</style>
