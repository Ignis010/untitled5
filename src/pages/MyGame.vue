<template>
  <v-div>
    <h1>Игры</h1>
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
        "ID", "Название", "Автор", "Цена"
      ],
      tableContent: [
        [1, 'Имаджинариум' , 'Сергей Дроздов', '1500'],
        [2, 'Манчкин', 'Corpse Party', '990'],
        [2, 'Мафия', 'Funny Play', '500'],
      ]
    }
  }
}
</script>

<style>
</style>