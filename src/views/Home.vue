<template>
  <div id="app">
    <Top></Top>
    <Bot></Bot>
  </div>
</template>

<script>
import Top from '../components/Top'
import Bot from '../components/Bot'
export default {
  name: "home",
  components:{
    Top,
    Bot
  }
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}

</style>
