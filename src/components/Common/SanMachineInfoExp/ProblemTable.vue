<template>
    <section class="problemTable">
        <table>
            <thead>
                <tr>
                    <th>问题类型</th>
                    <th>上报人员</th>
                    <th>上报时间</th>
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
.problemTable {
  width: 100%;
}
.problemTable table {
  width: 100%;
  white-space: nowrap;
}
.problemTable thead {
  border-bottom: 2px solid #ddd;
}
.problemTable th {
  font-size: 14px;
  color: #6e6e6e;
  font-weight: 600;
  padding: 16px 5px;
}
.problemTable th:first-child {
  text-align: left;
}

.problemTable td {
  text-align: center;
  padding: 14px 5px;
  font-size: 15px;
  color: #555;
}
.problemTable td:first-child {
  text-align: left;
}

.problemTable tbody tr {
  border-bottom: 1px solid #ddd;
}
</style>
