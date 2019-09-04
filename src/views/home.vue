<template>
  <div class="page">
    <div class="title">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello home page!aqqaa'
    }
  }
}
</script>

<style lang="stylus" scope>
  .page{
    width: 100%;
    height 300px;
    background-color blue;
    .title{
      height 100px;
      background-color gray
      text-align center
      font-size: 30px;
    }
  }
</style>
