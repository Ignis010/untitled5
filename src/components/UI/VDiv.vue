<template>
  <div class="content-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-div'
}
</script>

<style>
.content-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 10px ridge #99CCFF;
  border-radius: 5px;
  padding: 10px;
}
</style>