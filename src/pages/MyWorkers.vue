<template>
  <v-div>
    <h1>Сотрудники</h1>
    <v-table :headers="tableHeaders" :content="tableContent" />
  </v-div>
</template>

<script>
import VTable from "@/components/VTable.vue";
export default {
  components: {
    VTable
  },
  data() {
    return {
      tableHeaders: [
        "ID", "Фамилия", "Имя", "Отчество","Должность"
      ],
      tableContent: [
        [4175, 'Волошин' , 'Алексей', 'Даниэльевич','Администратор'],
        [4765, 'Брижко', 'Лейвик', 'Александрович','Продавец'],
        [4755, 'Федоров', 'Иван', 'Алексеевич','Уборщик']
      ]
    }
  }
}
</script>

<style>
</style>