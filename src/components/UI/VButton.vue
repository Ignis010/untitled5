<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-button'
}
</script>

<style>
.btn {
  width: 55%;
  height: 10%;
  border-radius: 10px;
  border: 2px solid #336699;
  margin-top: 5%;
  background-color: #99CCFF;
  font-size: 14pt;
}
</style>