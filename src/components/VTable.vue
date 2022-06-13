<template>
  <table class="v-table">
    <thead class="v-table-header">
    <tr>
      <th class="v-table-element" v-for="item in headers" :key="item">{{ item }}</th>
    </tr>
    </thead>
    <tbody class="v-table-content">
    <tr v-for="row in content" :key="row">
      <td class="v-table-element" v-for="item in row" :key="item">{{ item }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'v-table',
  props: ['headers', 'content']
};
</script>

<style>
th,
td {
  border-left: 3px solid #99CCFF;
  border-right: 3px solid #99CCFF;
}
.v-table {
  width: 100%;
  text-align: center;
  margin-bottom: 2%;
  border: 5px solid #99CCFF;
}
.v-table-header {
  border-bottom: 5px solid #99CCFF;
}
.v-table-element {
  padding: 5px;
}
</style>